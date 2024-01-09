import { Link } from "react-router-dom";
import { styled } from "../../../../styled-system/jsx";
import { css } from "../../../../styled-system/css";
import SearchBar from "./SearchBar";
import MediumIcon2 from "../../icons/MediumIcon2";
import SearchIcon from "../../icons/SearchIcon";
import NotificationIcon from "../../icons/NotificationIcon";
import WriteIcon from "../../icons/WriteIcon";
import MoreOptions from "./MoreOptions";

const Header2 = () => {
  return (
    <styled.div
      px="24px"
      h="64px"
      bgColor="#fff"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #f2f2f2"
      pos="sticky"
      top="0"
      zIndex="header"
    >
      <styled.div display="flex" alignItems="center" columnGap="24px">
        <Link to="/">
          <MediumIcon2 className={css({ h: "25px" })} />
        </Link>

        <styled.div display={{ smDown: "none" }}>
          <SearchBar />
        </styled.div>
      </styled.div>

      <styled.div display="flex" alignItems="center" columnGap="24px">
        <styled.div display={{ smDown: "none" }}>
          <Link to="/new-story">
            <styled.div
              display="flex"
              alignItems="center"
              columnGap="8px"
              cursor="pointer"
              color="#6b6b6b"
              _hover={{ color: "#000" }}
            >
              <WriteIcon />
              <styled.span fontSize="14px">Write</styled.span>
            </styled.div>
          </Link>
        </styled.div>

        <styled.div display={{ sm: "none" }}>
          <Link to="/search">
            <styled.div cursor="pointer" color="#6b6b6b" _hover={{ color: "#000" }}>
              <SearchIcon />
            </styled.div>
          </Link>
        </styled.div>

        <Link to="/notifications">
          <styled.div cursor="pointer" color="#6b6b6b" _hover={{ color: "#000" }}>
            <NotificationIcon />
          </styled.div>
        </Link>

        <MoreOptions />
      </styled.div>
    </styled.div>
  );
};

export default Header2;
