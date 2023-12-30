import { type FC, type ChangeEvent } from "react";
import { styled } from "../../../styled-system/jsx";
import { type SystemStyleObject } from "../../../styled-system/types";

type InputTextProps = {
  maxLength: number;
  placeholder?: string;
  description?: string;
  errorMessage?: string | null;
  value: string;
  onChange: (inputValue: string) => void;
  containerCss?: SystemStyleObject;
};

const TextInput: FC<InputTextProps> = ({
  maxLength,
  placeholder,
  description,
  errorMessage,
  value,
  onChange,
  containerCss,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <styled.div fontSize="14px" css={containerCss}>
      <styled.input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        w="100%"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="#e5e5e5"
        _focus={{ borderBottomColor: "#000" }}
        py="4px"
        _placeholder={{ color: "#6b6b6b", opacity: "0.5" }}
      />

      <styled.div
        display="flex"
        alignItems="center"
        justifyContent={
          !(errorMessage || description) ? "flex-end" : "space-between"
        }
        mt="4px"
        fontSize="14px"
      >
        <styled.p color={errorMessage ? "#c94a4a" : "#6b6b6b"}>
          {errorMessage ? errorMessage : description}
        </styled.p>

        {maxLength && (
          <styled.p>
            <styled.span color={value.length >= maxLength ? "#c94a4a" : "#000"}>
              {value.length}
            </styled.span>
            /{maxLength}
          </styled.p>
        )}
      </styled.div>
    </styled.div>
  );
};

export default TextInput;
