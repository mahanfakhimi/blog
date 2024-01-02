import { styled } from "../../../../styled-system/jsx";
import Avatar from "../../ui/Avatar";

const Trending = () => {
  return (
    <styled.div display="flex" columnGap="20px">
      <styled.div flex="0 0 auto">
        <styled.span color="#f2f2f2" fontSize="32px" fontWeight="500">
          01
        </styled.span>
      </styled.div>

      <styled.div>
        <styled.div display="flex" alignItems="center" columnGap="10px" mb="8px">
          <a href="#">
            <Avatar
              size="SM"
              src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
            />
          </a>

          <styled.h4 fontSize="14px" color="#242424">
            The Bold Italic
          </styled.h4>
        </styled.div>

        <styled.h2 fontWeight="700" fontSize="16px" mb="8px" lineClamp="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam quae possimus
          officiis autem magnam, est laboriosam in, doloribus expedita optio ut. Nulla quasi
          assumenda repellat. Error laudantium aliquam atque!
        </styled.h2>

        <styled.span color="#6b6b6b" fontSize="14px">
          Dec 1 &nbsp;·&nbsp; 6 min read
        </styled.span>
      </styled.div>
    </styled.div>
  );
};

export default Trending;
