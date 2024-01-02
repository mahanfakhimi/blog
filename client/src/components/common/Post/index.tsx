import { styled } from "../../../../styled-system/jsx";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import ReadingListPopper from "./ReadingListPopper";

const Post = () => {
  return (
    <styled.div display="flex" alignItems="center" columnGap="32px">
      <div>
        <styled.div display="flex" alignItems="center" columnGap="10px" mb="8px">
          <a href="#">
            <Avatar
              size="SM"
              src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
            />
          </a>

          <styled.h4>The Bold Italic</styled.h4>
        </styled.div>

        <styled.h2
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="700"
          color="#242424"
          mb="8px"
          lineClamp="2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum id illo quam.
          Sapiente quis quidem commodi, vitae ipsa necessitatibus ducimus eum minima nisi
          perferendis.
        </styled.h2>

        <styled.h3
          fontFamily="gt-super"
          fontSize="16px"
          color="#6A6B6B"
          mb="8px"
          display={{ mdDown: "none" }}
          lineClamp="2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam corrupti libero
          ullam suscipit vitae nemo ad vero eos doloribus!
        </styled.h3>

        <styled.div display="flex" alignItems="center" justifyContent="space-between">
          <styled.div display="flex" alignItems="center">
            <styled.span color="#6b6b6b" fontSize="14px">
              Dec 1 &nbsp;·&nbsp; 6 min read &nbsp;·&nbsp;&nbsp;
            </styled.span>

            <Button buttonStyle="BRAND_GRAY" size="SM" display={{ smDown: "none" }}>
              Innovation
            </Button>
          </styled.div>

          <ReadingListPopper />
        </styled.div>
      </div>

      <styled.div flex="0 0 auto" display="block" w="100px" h="100px">
        <styled.img
          objectFit="cover"
          src="https://miro.medium.com/v2/resize:fill:224:224/1*vxX0RR6eEcAVEN4pW_c63A.png"
        />
      </styled.div>
    </styled.div>
  );
};

export default Post;
