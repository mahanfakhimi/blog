import { type MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "../../../../styled-system/jsx";
import Avatar from "../../ui/Avatar";
import Popper from "../../ui/Popper";
import ProfileIcon from "../../icons/PeofileIcon";
import LibraryIcon from "../../icons/LibraryIcon";
import StoriesIcon from "../../icons/StoriesIcon";

const MoreOptions = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  const handleOpenPopper = (e: MouseEvent<HTMLImageElement>) => setAnchorEl(e.currentTarget);

  const handleClosePopper = () => setAnchorEl(null);

  return (
    <div>
      <Avatar
        size="MD"
        src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
        onClick={handleOpenPopper}
      />

      <Popper
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        onClose={handleClosePopper}
        placement="bottom-end"
      >
        <styled.div bgColor="#fff" rounded="3px" minW="250px">
          <styled.div py="16px" borderBottom="1px solid #f2f2f2">
            <Link to="/@wmkdgywkh">
              <styled.div
                display="flex"
                alignItems="center"
                columnGap="16px"
                px="24px"
                py="8px"
                cursor="pointer"
                color="#6b6b6b"
                _hover={{ color: "#000" }}
              >
                <ProfileIcon />
                <styled.span fontSize="14px">Profile</styled.span>
              </styled.div>
            </Link>

            <Link to="/lists">
              <styled.div
                display="flex"
                alignItems="center"
                columnGap="16px"
                px="24px"
                py="8px"
                cursor="pointer"
                color="#6b6b6b"
                _hover={{ color: "#000" }}
              >
                <LibraryIcon />
                <styled.span fontSize="14px">Library</styled.span>
              </styled.div>
            </Link>

            <Link to="/stories">
              <styled.div
                display="flex"
                alignItems="center"
                columnGap="16px"
                px="24px"
                py="8px"
                cursor="pointer"
                color="#6b6b6b"
                _hover={{ color: "#000" }}
              >
                <StoriesIcon />
                <styled.span fontSize="14px">Stories</styled.span>
              </styled.div>
            </Link>
          </styled.div>

          <styled.div py="16px" borderBottom="1px solid #f2f2f2">
            <Link to="/me/settings">
              <styled.div
                px="24px"
                py="8px"
                cursor="pointer"
                color="#6b6b6b"
                _hover={{ color: "#000" }}
              >
                <styled.span fontSize="14px">Settings</styled.span>
              </styled.div>
            </Link>

            <Link to="/me/following">
              <styled.div
                px="24px"
                py="8px"
                cursor="pointer"
                color="#6b6b6b"
                _hover={{ color: "#000" }}
              >
                <styled.span fontSize="14px">Refine recommendations</styled.span>
              </styled.div>
            </Link>
          </styled.div>

          <styled.div py="16px">
            <styled.div
              fontSize="14px"
              px="24px"
              py="8px"
              cursor="pointer"
              color="#6b6b6b"
              _hover={{ color: "#000" }}
            >
              <styled.p mb="4px">Sign out</styled.p>
              <styled.p color="#6b6b6b">wm•••••••@gmail.com</styled.p>
            </styled.div>
          </styled.div>
        </styled.div>
      </Popper>
    </div>
  );
};

export default MoreOptions;
