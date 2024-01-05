import { MouseEvent, useState } from "react";
import { styled } from "../../../styled-system/jsx";
import MoreIcon from "../icons/MoreIcon";
import Menu from "../ui/Menu";
import MenuItem from "../ui/MenuItem";
import MenuSeparator from "../ui/MenuSeparator";

const PostCreatorActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const haneleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div>
      <styled.button
        onClick={haneleMenuOpen}
        cursor="pointer"
        color="#6B6B6B"
        display="flex"
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
        <MenuItem>Edit story</MenuItem>
        <MenuItem>Pin this story to your profile</MenuItem>
        <MenuSeparator />
        <MenuItem>Story settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Hide responses</MenuItem>
        <MenuItem containerCss={{ color: "#c94a4a" }}>Delete story</MenuItem>
      </Menu>
    </div>
  );
};

export default PostCreatorActionMenu;
