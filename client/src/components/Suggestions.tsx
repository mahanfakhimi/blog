import { styled } from "../../styled-system/jsx";
import Avatar from "./ui/Avatar";
import Button from "./ui/Button";

const Suggestions = () => {
  return (
    <styled.div mb="24px">
      <styled.h2 fontWeight="500" fontSize="16px" color="#242424" mb="16px">
        Who to follow
      </styled.h2>

      {[...Array(6)].map((_, index) => (
        <styled.div key={index} display="flex" alignItems="center" columnGap="10px" mb="16px">
          <Avatar
            size="MD"
            src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
          />

          <styled.div display="flex" alignItems="center" columnGap="10px">
            <styled.div>
              <styled.h2 fontWeight="700" fontSize="16px" color="#242424">
                Vaishnav Manoj
              </styled.h2>

              <styled.p fontSize="14px" color="#6b6b6b" lineClamp="2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio
                doloremque? Perspiciatis maiores dolorem ea natus velit a laboriosam modi!
              </styled.p>
            </styled.div>

            <Button buttonStyle="SUBTLE">Follow</Button>
          </styled.div>
        </styled.div>
      ))}

      <a href="#">
        <Button buttonStyle="TEXT_STRONG">See more topics</Button>
      </a>
    </styled.div>
  );
};

export default Suggestions;
