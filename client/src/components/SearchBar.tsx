import { type ChangeEvent, type FocusEvent, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import SearchIcon from "./icons/SearchIcon";
import useInputEnter from "../hooks/useInputEnter";
import Popper from "./ui/Popper";
import RecentSearches from "./RecentSearches";

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const focusedColor = isFocused ? "#000" : "#6b6b6b";

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    !e.target.value && setAnchorEl(rootRef.current);
  };

  const handleInputBlur = () => setIsFocused(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    anchorEl && setAnchorEl(null);
    !e.target.value && setAnchorEl(rootRef.current);
  };

  const handleInputEnter = () => navigate(`/search?q=${inputValue}`);

  useInputEnter(inputRef, handleInputEnter);

  return (
    <div ref={rootRef}>
      <styled.div
        bgColor="#f2f2f2"
        w="240px"
        rounded="100px"
        display="flex"
        alignItems="center"
        columnGap="14px"
        px="14px"
        pos="relative"
      >
        <SearchIcon
          className={css({ color: focusedColor, pointerEvents: "none" })}
        />

        <styled.input
          type="text"
          placeholder="Search"
          w="100%"
          py="10px"
          fontSize="14px"
          bgColor="transparent"
          _placeholder={{ color: focusedColor }}
          ref={inputRef}
          value={inputValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
      </styled.div>

      <Popper
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        placement="bottom-start"
      >
        <styled.div
          bgColor="#fff"
          rounded="3px"
          minW="350px"
          p="16px 16px 0 16px"
        >
          <styled.div borderBottom="1px solid #f2f2f2" pb="16px">
            <styled.span color="#6b6b6b" fontSize="14px" fontWeight="500">
              Recent searches
            </styled.span>
          </styled.div>

          <RecentSearches />
        </styled.div>
      </Popper>
    </div>
  );
};

export default SearchBar;
