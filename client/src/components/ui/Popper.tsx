import { type CSSProperties, type FC, type ReactNode, useEffect, useRef } from "react";
import { type Placement, type VirtualElement, type Instance, createPopper } from "@popperjs/core";
import { type TransitionStatus, Transition } from "react-transition-group";
import { styled } from "../../../styled-system/jsx";
import { SystemStyleObject } from "../../../styled-system/types/system-types";
import Portal from "./Portal.tsx";

const duration = 200;

const defaultStyle: CSSProperties = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

type PopperProps = {
  anchorEl: VirtualElement | null;
  children: ReactNode;
  placement?: Placement;
  onClose: NoneToVoidFunction;
  isOpen: boolean;
  containerCss?: SystemStyleObject;
};

const Popper: FC<PopperProps> = ({
  children,
  isOpen,
  onClose,
  anchorEl,
  containerCss,
  placement = "bottom",
}) => {
  const popperRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    popperInstanceRef.current = createPopper(anchorEl!, popperRef.current!, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    });

    return () => {
      popperInstanceRef.current = null;
    };
  }, [anchorEl, placement]);

  return (
    <Portal>
      <Transition
        nodeRef={nodeRef}
        in={isOpen}
        unmountOnExit
        timeout={duration}
        onExiting={() => popperInstanceRef.current?.destroy()}
      >
        {(state) => (
          <styled.div
            ref={nodeRef}
            pos="fixed"
            inset="0"
            zIndex="popper"
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <styled.div inset="0" pos="fixed" zIndex="backdrop" onClick={onClose} />

            <styled.div
              ref={popperRef}
              rounded="3px"
              pos="relative"
              bgColor="#fff"
              shadow="rgba(0, 0, 0, 0.05) 0px 0px 4px, rgba(0, 0, 0, 0.15) 0px 2px 8px"
              css={containerCss}
            >
              {children}
            </styled.div>
          </styled.div>
        )}
      </Transition>
    </Portal>
  );
};

export default Popper;
