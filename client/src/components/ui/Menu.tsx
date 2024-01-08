import { type ReactNode, type FC } from "react";
import { type Placement, type VirtualElement } from "@popperjs/core";
import { styled } from "../../../styled-system/jsx";
import { SystemStyleObject } from "../../../styled-system/types";
import Popper from "./Popper";

type MenuProps = {
  anchorEl: VirtualElement | null;
  isOpen: boolean;
  children: ReactNode;
  placement?: Placement;
  onClose: NoneToVoidFunction;
  containerCss?: SystemStyleObject;
};

const Menu: FC<MenuProps> = ({ isOpen, anchorEl, onClose, placement, containerCss, children }) => {
  return (
    <Popper
      anchorEl={anchorEl}
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      containerCss={containerCss}
    >
      <styled.div listStyleType="none" overflow="hidden" bgColor="#fff" rounded="3px" py="8px">
        {children}
      </styled.div>
    </Popper>
  );
};

export default Menu;
