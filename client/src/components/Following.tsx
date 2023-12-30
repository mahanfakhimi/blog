import { styled } from "../../styled-system/jsx";
import ProfileInfoPopper from "./ProfileInfoPopper";
import MoreIcon from "./icons/MoreIcon";
import Avatar from "./ui/Avatar";

const Following = () => {
  return (
    <styled.div mt="48px" mb="24px">
      <styled.h2 fontWeight="500" fontSize="16px" color="#242424" mb="16px">
        Following
      </styled.h2>

      {[...Array(8)].map((_, index) => (
        <styled.div
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap="10px"
          mb="16px"
        >
          <styled.div display="flex" columnGap="10px">
            <Avatar
              size="SM"
              src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
            />

            <a href="#">
              <styled.p fontSize="14px" color="#6B6B6B" _hover={{ color: "#000" }}>
                Lorem ipsum dolor sit amet.
              </styled.p>
            </a>
          </styled.div>

          <ProfileInfoPopper />
        </styled.div>
      ))}

      <a href="#">
        <styled.span fontSize="14px" color="#6B6B6B" _hover={{ color: "#000" }}>
          See all (85)
        </styled.span>
      </a>
    </styled.div>
  );
};

export default Following;
