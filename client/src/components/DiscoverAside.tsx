import { styled } from "../../styled-system/jsx";
import RecommendedTopics from "./RecommendedTopics";
import Suggestions from "./Suggestions";

const DiscoverAside = () => {
  return (
    <styled.div
      borderLeft="1px solid #f2f2f2"
      pl="48px"
      pt="48px"
      pos="sticky"
      top="64px"
      overflowY="scroll"
      maxH="calc(100vh - 64px)"
      scrollbar="hidden"
    >
      <RecommendedTopics />
      <Suggestions />
    </styled.div>
  );
};

export default DiscoverAside;
