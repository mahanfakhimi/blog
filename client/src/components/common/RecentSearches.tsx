import { Link } from "react-router-dom";
import { styled } from "../../../styled-system/jsx";
import { css } from "../../../styled-system/css";
import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";

const RecentSearches = () => {
  return (
    <styled.div
      display="flex"
      flexDir="column"
      css={{
        "& > div:not(:last-of-type)": {
          borderBottom: "1px solid #f2f2f2",
        },
      }}
    >
      {[...Array(3)].map((_, index) => (
        <styled.div
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py="16px"
        >
          <Link to={`/search?q=react`} className={css({ flex: "1" })}>
            <styled.div
              display="flex"
              alignItems="center"
              columnGap="16px"
              color="#6b6b6b"
              _hover={{ color: "#000" }}
            >
              <SearchIcon />
              <styled.p fontSize="14px">React</styled.p>
            </styled.div>
          </Link>

          <styled.div
            color="#6b6b6b"
            _hover={{ color: "#000" }}
            cursor="pointer"
          >
            <CloseIcon />
          </styled.div>
        </styled.div>
      ))}
    </styled.div>
  );
};

export default RecentSearches;
