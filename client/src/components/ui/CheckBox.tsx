import { type FC } from "react";
import { styled } from "../../../styled-system/jsx";
import { css } from "../../../styled-system/css";
import CheckIcon from "../icons/CheckIcon";

type CheckBoxProps = {
  isChecked: boolean;
  isLoading?: boolean;
  label: string;
  onChange: (isChecked: boolean) => void;
};

const CheckBox: FC<CheckBoxProps> = ({ isChecked, isLoading, label, onChange }) => {
  const handleClick = () => onChange(!isChecked);

  return (
    <styled.div display="flex" alignItems="center" columnGap="10px">
      <styled.div
        w="17px"
        h="17px"
        pointerEvents={isLoading ? "none" : undefined}
        bgColor={isLoading ? "#f2f2f2" : isChecked ? "#1a8917" : "#fff"}
        borderWidth="1px"
        borderStyle="solid"
        borderColor={isLoading ? "#f2f2f2" : isChecked ? "#1a8917" : "#e5e5e5"}
        color={isLoading ? "#ddd" : "#fff"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        rounded="2px"
        _hover={{
          bgColor: isChecked ? "#156d12" : "transparent",
          borderColor: isChecked ? "#156d12" : "#000",
        }}
        onClick={handleClick}
      >
        {isChecked && <CheckIcon className={css({ flex: 1 })} />}
      </styled.div>

      <styled.span onClick={handleClick} cursor="pointer" fontSize="16px" color="#000">
        {label}
      </styled.span>
    </styled.div>
  );
};

export default CheckBox;
