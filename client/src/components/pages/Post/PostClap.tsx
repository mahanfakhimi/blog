import { type FC, useState } from "react";
import { styled } from "../../../../styled-system/jsx";
import ClapIcon from "../../icons/ClapIcon";

type PostClapProps = {
  initialClapCount: number;
};

const PostClap: FC<PostClapProps> = ({ initialClapCount }) => {
  const [clapCount, setClapCount] = useState(initialClapCount);

  const handleClapIncrement = () => setClapCount((prevClapCount) => prevClapCount + 1);

  return (
    <styled.button
      color="#6b6b6b"
      display="flex"
      alignItems="center"
      columnGap="8px"
      cursor="pointer"
      _hover={{ color: "#000" }}
      onClick={handleClapIncrement}
    >
      <ClapIcon />
      <styled.p fontSize="14px">{clapCount}</styled.p>
    </styled.button>
  );
};

export default PostClap;
