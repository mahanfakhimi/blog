import { type MutableRefObject, useEffect } from "react";

type InputRef = MutableRefObject<HTMLInputElement | null>;

const useInputEnter = (inputRef: InputRef, onEnter: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => event.key === "Enter" && onEnter();

    const inputElement = inputRef.current;

    if (inputElement) inputElement.addEventListener("keypress", handleKeyPress);

    return () => {
      if (inputElement) inputElement.removeEventListener("keypress", handleKeyPress);
    };
  }, [inputRef, onEnter]);
};

export default useInputEnter;
