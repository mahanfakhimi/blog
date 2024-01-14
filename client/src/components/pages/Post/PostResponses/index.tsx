import { type CSSProperties } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";
import { styled } from "../../../../../styled-system/jsx";
import useFlag from "../../../../hooks/useFlag";
import RespondIcon from "../../../icons/RespondIcon";
import CloseIcon from "../../../icons/CloseIcon";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import CreateResponseForm from "./CreateResponseForm";
import Portal from "../../../ui/Portal";

const duration = 400;

const defaultStyle: CSSProperties = {
  opacity: 0,
  transition: `opacity ${duration}ms`,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

const PostResponses = () => {
  const {
    value: isResponsesPanelOpen,
    setTrue: openResponsesPanel,
    setFalse: closeResponsesPanel,
  } = useFlag();

  const isMobile = useMediaQuery("(max-width: 768px)");

  const responsesPanelDefaultStyle: CSSProperties = {
    ...(isMobile ? { bottom: "-100vh" } : { right: "-100vh" }),
    transition: `${isMobile ? "bottom" : "right"} ${duration}ms`,
  };

  const commonResponsesPanelTransitionStyles = { ...(isMobile ? { bottom: "0" } : { right: "0" }) };

  const responsesPanelTransitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
    entering: commonResponsesPanelTransitionStyles,
    entered: commonResponsesPanelTransitionStyles,
  };

  return (
    <div>
      <styled.button
        color="#6b6b6b"
        display="flex"
        alignItems="center"
        columnGap="8px"
        cursor="pointer"
        _hover={{ color: "#000" }}
        onClick={openResponsesPanel}
      >
        <RespondIcon />
        <styled.p fontSize="14px">152</styled.p>
      </styled.button>

      <Portal>
        <Transition in={isResponsesPanelOpen} unmountOnExit timeout={duration}>
          {(state) => (
            <styled.div pos="fixed" inset="0" zIndex="modal">
              <styled.div
                style={{ ...defaultStyle, ...transitionStyles[state] }}
                inset="0"
                pos="fixed"
                zIndex="backdrop"
                bgColor="rgba(0, 0, 0, 0.25)"
                onClick={closeResponsesPanel}
              />

              <styled.div
                style={{ ...responsesPanelDefaultStyle, ...responsesPanelTransitionStyles[state] }}
                bgColor="#fff"
                pos="fixed"
                p="24px"
                maxH="100vh"
                overflowY="auto"
                w={{ base: "100%", md: "400px" }}
                h={{ base: "calc(100% - 32px)", md: "100%" }}
                roundedTop={{ mdDown: "20px" }}
              >
                <styled.div display="flex" alignItems="center" justifyContent="space-between">
                  <styled.p fontSize="20px" fontWeight="500">
                    Reponses (13)
                  </styled.p>

                  <styled.button
                    onClick={closeResponsesPanel}
                    color="#6b6b6b"
                    _hover={{ color: "#000" }}
                    cursor="pointer"
                  >
                    <CloseIcon />
                  </styled.button>
                </styled.div>

                <CreateResponseForm />
              </styled.div>
            </styled.div>
          )}
        </Transition>
      </Portal>
    </div>
  );
};

export default PostResponses;
