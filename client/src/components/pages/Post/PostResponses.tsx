import { type CSSProperties } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";
import { styled } from "../../../../styled-system/jsx";
import useFlag from "../../../hooks/useFlag";
import RespondIcon from "../../icons/RespondIcon";
import CloseIcon from "../../icons/CloseIcon";

const duration = 400;

const defaultStyle: CSSProperties = {
  opacity: 0,
  transition: `opacity ${duration}ms`,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

const responsesPanelDefaultStyle: CSSProperties = {
  right: "-100vh",
  transition: `right ${duration}ms`,
};

const responsesPanelTransitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { right: 1 },
  entered: { right: 1 },
};

const PostResponses = () => {
  const { value: isOpen, setTrue, setFalse } = useFlag(false);

  return (
    <div>
      <styled.button
        color="#6b6b6b"
        display="flex"
        alignItems="center"
        columnGap="8px"
        cursor="pointer"
        _hover={{ color: "#000" }}
        onClick={setTrue}
      >
        <RespondIcon />
        <styled.p fontSize="14px">152</styled.p>
      </styled.button>

      <Transition in={isOpen} unmountOnExit timeout={duration}>
        {(state) => (
          <styled.div pos="fixed" inset="0" zIndex="modal">
            <styled.div
              style={{ ...defaultStyle, ...transitionStyles[state] }}
              inset="0"
              pos="fixed"
              zIndex="backdrop"
              bgColor="rgba(0, 0, 0, 0.25)"
              onClick={setFalse}
            />

            <styled.div
              style={{ ...responsesPanelDefaultStyle, ...responsesPanelTransitionStyles[state] }}
              bgColor="#fff"
              pos="fixed"
              p="24px"
              w="400px"
              h="100%"
            >
              <styled.div display="flex" alignItems="center" justifyContent="space-between">
                <styled.p fontSize="20px" fontWeight="500">
                  Reponses (13)
                </styled.p>

                <styled.button
                  onClick={setFalse}
                  color="#6b6b6b"
                  _hover={{ color: "#000" }}
                  cursor="pointer"
                >
                  <CloseIcon />
                </styled.button>
              </styled.div>
            </styled.div>
          </styled.div>
        )}
      </Transition>
    </div>
  );
};

export default PostResponses;
