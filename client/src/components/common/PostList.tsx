import { styled } from "../../../styled-system/jsx";
import Post from "./Post";

const PostList = () => {
  return (
    <styled.div display="flex" flexDir="column" rowGap="48px">
      {[...Array(6)].map((_, index) => (
        <Post key={index} />
      ))}
    </styled.div>
  );
};

export default PostList;
