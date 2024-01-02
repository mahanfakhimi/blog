import { MouseEvent, useState } from "react";
import { styled } from "../../../../styled-system/jsx";
import MoreIcon from "../../icons/MoreIcon";
import Menu from "../../ui/Menu";
import MenuItem from "../../ui/MenuItem";

const ProfileMoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const haneleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div>
      <styled.button
        onClick={haneleMenuOpen}
        cursor="pointer"
        color="#6B6B6B"
        _hover={{ color: "#000" }}
      >
        <MoreIcon />
      </styled.button>

      <Menu
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        placement="bottom-end"
        onClose={handleMenuClose}
      >
        <styled.div>
          <MenuItem>Copy link to profile</MenuItem>
          <MenuItem>Mute this author</MenuItem>
          <MenuItem>Block this author</MenuItem>
        </styled.div>
      </Menu>
    </div>
  );
};

export default ProfileMoreMenu;
