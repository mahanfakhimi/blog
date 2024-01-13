import { type CSSProperties } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";
import { styled } from "../../../../styled-system/jsx";
import useFlag from "../../../hooks/useFlag";
import RespondIcon from "../../icons/RespondIcon";
import CloseIcon from "../../icons/CloseIcon";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";

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

              <styled.div mt="24px" p="16px" boxShadow="rgba(0, 0, 0, 0.12) 0px 2px 8px">
                <styled.div display="flex" alignItems="center" columnGap="10px">
                  <a href="#">
                    <Avatar
                      size="MD"
                      src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
                    />
                  </a>

                  <styled.h4 fontSize="14px">The Bold Italic</styled.h4>
                </styled.div>

                <styled.input
                  type="text"
                  placeholder="What are you thoughes?"
                  fontSize="14px"
                  mt="16px"
                  _placeholder={{ color: "#6b6b6b", opacity: "0.5" }}
                />

                <styled.div display="flex" alignItems="center" justifyContent="flex-end" mt="24px">
                  <styled.div display="flex" alignItems="center" columnGap="16px">
                    <Button buttonStyle="TEXT_STRONG" size="SM">
                      Cancel
                    </Button>
                    <Button buttonStyle="STRONG" size="SM">
                      Respond
                    </Button>
                  </styled.div>
                </styled.div>
              </styled.div>
            </styled.div>
          </styled.div>
        )}
      </Transition>
    </div>
  );
};

export default PostResponses;
