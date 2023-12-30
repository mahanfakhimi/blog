import { styled } from "../../styled-system/jsx";
import Trending from "./Trending";
import TrendingIcon from "./icons/TrendingIcon";

const TrendingList = () => {
  return (
    <styled.div mt="48px" pb="48px" borderBottom="1px solid #f2f2f2">
      <styled.div maxW="1200px" w="100%" mx="auto" px="24px">
        <styled.div
          display="flex"
          alignItems="center"
          columnGap="1rem"
          mb="16px"
        >
          <TrendingIcon />

          <styled.h2 fontWeight="500" fontSize="16px" color="#242424">
            Trending on Medium
          </styled.h2>
        </styled.div>

        <styled.div
          display="grid"
          gap="1rem"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <Trending key={index} />
          ))}
        </styled.div>
      </styled.div>
    </styled.div>
  );
};

export default TrendingList;
