import { MouseEvent, useState } from "react";
import { styled } from "../../../../../../styled-system/jsx";
import MoreIcon from "../../../../icons/MoreIcon";
import Popper from "../../../../ui/Popper";
import Avatar from "../../../../ui/Avatar";
import Button from "../../../../ui/Button";

const ProfileInfoPopper = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopper = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);

  const handleClosePopper = () => setAnchorEl(null);

  return (
    <div>
      <styled.button
        onClick={handleOpenPopper}
        cursor="pointer"
        color="#6B6B6B"
        _hover={{ color: "#000" }}
      >
        <MoreIcon />
      </styled.button>

      <Popper
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        onClose={handleClosePopper}
        placement="bottom-end"
      >
        <styled.div maxW="300px" padding="16px">
          <styled.div display="flex" alignItems="center" columnGap="10px">
            <a href="#">
              <Avatar
                size="MD"
                src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
              />
            </a>

            <styled.h4 fontSize="20px" fontWeight="500">
              Mahan_fki
            </styled.h4>
          </styled.div>

          <styled.p fontSize="14px" color="#6A6B6B" lineClamp="3" mt="16px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, nihil quod!
            Excepturi consequuntur ipsa voluptatem, corporis quaerat quod, voluptatum non,
            distinctio ea est similique tenetur!
          </styled.p>

          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderTop="1px solid #f2f2f2"
            pt="16px"
            mt="16px"
          >
            <styled.p fontSize="14px" color="#6A6B6B">
              621 Followers
            </styled.p>

            <Button buttonStyle="STRONG" size="SM">
              Follow
            </Button>
          </styled.div>
        </styled.div>
      </Popper>
    </div>
  );
};

export default ProfileInfoPopper;
