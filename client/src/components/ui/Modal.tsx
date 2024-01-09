import { type FC, type ReactNode, type CSSProperties } from "react";
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
  onClose: NoneToVoidFunction;
};

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  return (
    <Portal>
      <Transition in={isOpen} unmountOnExit timeout={duration}>
        {(state) => (
          <styled.div
            pos="fixed"
            inset="0"
            zIndex="modal"
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <styled.div
              inset="0"
              pos="fixed"
              zIndex="backdrop"
              bgColor="rgba(0, 0, 0, 0.25)"
              onClick={onClose}
            />

            <styled.div
              bgColor="#fff"
              pos="fixed"
              top="50%"
              left="50%"
              translate="-50% -50%"
              w="calc(100% - 32px)"
              maxW="550px"
              p="24px"
              rounded="4px"
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
