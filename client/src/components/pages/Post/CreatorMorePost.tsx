import { styled } from "../../../../styled-system/jsx";
import ProfileMoreMenu from "../../common/ProfileMoreMenu";
import ReadingListPopper from "../../common/ReadingListPopper";
import RespondIcon from "../../icons/RespondIcon";
import Avatar from "../../ui/Avatar";
import PostClap from "./PostClap";

const CreatorMorePost = () => {
  return (
    <div>
      <styled.img
        w="100%"
        h="165px"
        mb="32px"
        objectFit="cover"
        src="https://miro.medium.com/v2/resize:fill:224:224/1*vxX0RR6eEcAVEN4pW_c63A.png"
      />

      <styled.div display="flex" alignItems="center" columnGap="16px" mb="16px">
        <Avatar
          src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
          size="SM"
        />

        <styled.p fontSize="14px">Mahan_fki</styled.p>
      </styled.div>

      <styled.h2 fontSize="20px" fontWeight="700" lineClamp="2" mb="8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repudiandae quibusdam quo?
        Omnis delectus, consequuntur non a in dicta dignissimos.
      </styled.h2>

      <styled.h3 fontSize="16px" color="#6b6b6b" lineClamp="2" mb="16px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repudiandae quibusdam quo?
        Omnis delectus, consequuntur non a in dicta dignissimos.
      </styled.h3>

      <styled.div display="flex" alignItems="center" justifyContent="space-between">
        <styled.div display="flex" alignItems="center" columnGap="32px">
          <PostClap initialClapCount={50} />

          <styled.button
            color="#6b6b6b"
            display="flex"
            alignItems="center"
            columnGap="8px"
            cursor="pointer"
            _hover={{ color: "#000" }}
          >
            <RespondIcon />
            <styled.p fontSize="14px">252</styled.p>
          </styled.button>
        </styled.div>

        <styled.div display="flex" alignItems="center" columnGap="32px">
          <ReadingListPopper />
          <ProfileMoreMenu />
        </styled.div>
      </styled.div>
    </div>
  );
};

export default CreatorMorePost;
