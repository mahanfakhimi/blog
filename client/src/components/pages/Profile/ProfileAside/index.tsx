import { styled } from "../../../../../styled-system/jsx";
import Avatar from "../../../ui/Avatar";
import Button from "../../../ui/Button";
import SubscribeIcon from "../../../icons/SubscribeIcon";
import Following from "./Following";

const ProfileAside = () => {
  return (
    <styled.div
      borderLeft="1px solid #f2f2f2"
      pl="48px"
      pt="48px"
      pos="sticky"
      top="64px"
      overflowY="scroll"
      maxH="calc(100vh - 64px)"
      scrollbar="hidden"
    >
      <Avatar
        src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
        size="2XLG"
      />

      <styled.h2 fontSize="16px" fontWeight="500" mt="16px">
        Mahan_fki
      </styled.h2>

      <a href="#">
        <styled.h2 color="#6B6B6B" fontSize="16px" mb="16px" _hover={{ color: "#000" }}>
          1.7K Followers
        </styled.h2>
      </a>

      <styled.p color="#6B6B6B" fontSize="16px" mb="24px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus libero consequatur
        blanditiis quibusdam repudiandae deleniti ipsam! Nobis repudiandae exercitationem aut.
      </styled.p>

      <styled.div display="flex" alignItems="center" columnGap="16px">
        <Button buttonStyle="STRONG">Follow</Button>

        <Button buttonStyle="STRONG" p="0">
          <SubscribeIcon />
        </Button>
      </styled.div>

      <Following />
    </styled.div>
  );
};

export default ProfileAside;
