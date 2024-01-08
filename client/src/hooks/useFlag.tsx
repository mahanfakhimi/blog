import { useCallback, useState } from "react";

const useFlag = (initial = false) => {
  const [value, setValue] = useState(initial);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prevValue) => !prevValue), []);

  return { value, setTrue, setFalse, toggle };
};

export default useFlag;
