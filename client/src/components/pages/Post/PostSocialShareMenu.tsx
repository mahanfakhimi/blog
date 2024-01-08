import { type MouseEvent, useState } from "react";
import { styled } from "../../../../styled-system/jsx";
import { SystemStyleObject } from "../../../../styled-system/types";
import ShareIcon from "../../icons/ShareIcon";
import Menu from "../../ui/Menu";
import MenuItem from "../../ui/MenuItem";
import CopyIcon from "../../icons/CopyIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import MenuSeparator from "../../ui/MenuSeparator";

const PostSocialShareMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const containerCssStyle: SystemStyleObject = { display: "flex", columnGap: "16px" };

  const haneleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  return (
    <div>
      <styled.button
        color="#6b6b6b"
        display="flex"
        cursor="pointer"
        _hover={{ color: "#000" }}
        onClick={haneleMenuOpen}
      >
        <ShareIcon />
      </styled.button>

      <Menu
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        placement="bottom-end"
        onClose={handleMenuClose}
        containerCss={{ w: "240px" }}
      >
        <MenuItem containerCss={containerCssStyle}>
          <CopyIcon />
          Copy link
        </MenuItem>

        <MenuSeparator />

        <MenuItem containerCss={containerCssStyle}>
          <TwitterIcon />
          Share on Twitter
        </MenuItem>

        <MenuItem containerCss={containerCssStyle}>
          <FacebookIcon />
          on Facebook
        </MenuItem>

        <MenuItem containerCss={containerCssStyle}>
          <LinkedInIcon />
          Share on LinkedIn
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PostSocialShareMenu;
