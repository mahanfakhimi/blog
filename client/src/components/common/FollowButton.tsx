import Button from "../ui/Button";
import useFlag from "../../hooks/useFlag";

const FollowButton = () => {
  const { value: isFollow, toggle: toggleFollow } = useFlag(false);

  return (
    <Button buttonStyle={isFollow ? "OBVIOUS" : "STRONG"} onClick={toggleFollow}>
      {isFollow ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
