import { styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import useScrollTop from "../hooks/useScrollTop";
import MediumIcon from "./icons/MediumIcon";
import Button from "./ui/Button";

const Header = () => {
  const isScrolled = useScrollTop(250);

  return (
    <styled.header
      bgColor={isScrolled ? "#fff" : "#FFC017"}
      p="24px"
      transition="all 0.3s"
      borderBottom="1px solid #000"
      pos="sticky"
      top="0"
      zIndex="100"
    >
      <styled.div
        maxW="1200px"
        w="100%"
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <a href="#">
          <MediumIcon className={css({ w: "160px", h: "25px" })} />
        </a>

        <styled.div display="flex" alignItems="center" columnGap="24px">
          <styled.ul display="flex" alignItems="center" columnGap="24px">
            <styled.li color="#242424" mdDown={{ display: "none" }} fontSize="14px">
              <a href="#">Our story</a>
            </styled.li>

            <styled.li color="#242424" mdDown={{ display: "none" }} fontSize="14px">
              <a href="#">Membership</a>
            </styled.li>

            <styled.li color="#242424" mdDown={{ display: "none" }} fontSize="14px">
              <a href="#">Write</a>
            </styled.li>

            <styled.li color="#242424" fontSize="14px">
              <a href="#">Sign in</a>
            </styled.li>
          </styled.ul>

          <Button buttonStyle={isScrolled ? "STRONG" : "BRAND"}>Get started</Button>
        </styled.div>
      </styled.div>
    </styled.header>
  );
};

export default Header;
