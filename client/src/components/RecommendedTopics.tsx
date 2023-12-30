import { styled } from "../../styled-system/jsx";
import Button from "./ui/Button";

const tags = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
];

const RecommendedTopics = () => {
  return (
    <styled.div mb="48px">
      <styled.h2 fontWeight="500" fontSize="16px" color="#242424" mb="16px">
        Recommended topics
      </styled.h2>

      <styled.div display="flex" flexWrap="wrap" gap="16px" mb="16px">
        {tags.map((tag, index) => (
          <Button key={index} buttonStyle="BRAND_GRAY" flex="0 0 auto">
            {tag}
          </Button>
        ))}
      </styled.div>

      <a href="#">
        <Button buttonStyle="TEXT_STRONG">See more topics</Button>
      </a>
    </styled.div>
  );
};

export default RecommendedTopics;
