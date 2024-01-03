import { type ReactNode, type FC } from "react";
import { styled } from "../../../styled-system/jsx";
import { SystemStyleObject } from "../../../styled-system/types";

type MenuItemProps = {
  children: ReactNode;
  containerCss?: SystemStyleObject;
};

const MenuItem: FC<MenuItemProps> = ({ children, containerCss }) => {
  return (
    <styled.div
      css={containerCss}
      w="100%"
      py="8px"
      px="16px"
      cursor="pointer"
      fontSize="14px"
      color="#6b6b6b"
      _hover={{ color: "#000" }}
    >
      {children}
    </styled.div>
  );
};

export default MenuItem;
