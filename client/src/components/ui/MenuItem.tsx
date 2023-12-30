import { type ReactNode, type FC } from "react";
import { styled } from "../../../styled-system/jsx";

type MenuItemProps = {
  children: ReactNode;
};

const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return (
    <styled.div
      w="100%"
      py="8px"
      px="16px"
      cursor="pointer"
      fontSize="14px"
      color="#6b6b6b"
      _hover={{ color: "#000" }}
    >
      <span>{children}</span>
    </styled.div>
  );
};

export default MenuItem;
