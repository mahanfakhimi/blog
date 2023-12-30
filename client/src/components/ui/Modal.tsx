import { type FC, type ReactNode, type CSSProperties, useRef } from "react";
import { type TransitionStatus, Transition } from "react-transition-group";
import { styled } from "../../../styled-system/jsx";
import Portal from "./Portal";

const duration = 200;

const defaultStyle: CSSProperties = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Portal>
      <Transition
        nodeRef={nodeRef}
        in={isOpen}
        unmountOnExit
        timeout={duration}
      >
        {(state) => (
          <styled.div
            pos="absolute"
            zIndex="1000"
            ref={nodeRef}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <styled.div
              w="100%"
              h="100%"
              left="0"
              top="0"
              pos="fixed"
              zIndex="750"
              bgColor="rgba(0, 0, 0, 0.25)"
              onClick={onClose}
            />

            <styled.div
              bgColor="#fff"
              zIndex="1000"
              pos="fixed"
              top="50%"
              left="50%"
              translate="-50% -50%"
              w="calc(100% - 32px)"
              maxW="550px"
              p="24px"
              rounded="4px"
              shadow="#00000026 0px 2px 10px"
            >
              {children}
            </styled.div>
          </styled.div>
        )}
      </Transition>
    </Portal>
  );
};

export default Modal;
