import { type FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "../../../styled-system/jsx";

type TabProps = {
  title: string;
  isActive?: boolean;
  clickArg: number;
  href: string;
  onTabClick: (arg: number) => void;
};

const Tab: FC<TabProps> = ({ title, isActive, clickArg, onTabClick, href }) => {
  const handleClick = () => onTabClick(clickArg);

  return (
    <styled.div pb="16px" borderBottom={`1px solid ${isActive ? "#000" : "#f2f2f2"}`} whiteSpace="nowrap">
      <Link to={href} onClick={handleClick}>
        <styled.div fontSize="14px" color={isActive ? "#000" : "#6b6b6b"} _hover={{ color: "#000" }}>
          {title}
        </styled.div>
      </Link>
    </styled.div>
  );
};

export default Tab;
