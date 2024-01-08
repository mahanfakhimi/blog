import { styled } from "../../../../styled-system/jsx";
import RespondIcon from "../../icons/RespondIcon";

const PostResponses = () => {
  return (
    <div>
      <styled.button
        color="#6b6b6b"
        display="flex"
        alignItems="center"
        columnGap="8px"
        cursor="pointer"
        _hover={{ color: "#000" }}
      >
        <RespondIcon />
      </styled.button>
    </div>
  );
};

export default PostResponses;
