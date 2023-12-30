import { styled } from "../../styled-system/jsx";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <styled.div bgColor="#FFC017" p="90px 24px" borderBottom="1px solid #000">
      <styled.div maxW="1200px" w="100%" mx="auto">
        <styled.h3
          fontSize={{ base: "75px", md: "85px", lg: "106px" }}
          lineHeight="95px"
          letterSpacing="-0.05em"
          fontFamily="gt-super !important"
          mb="35px"
          color="#242424"
        >
          Stay curious.
        </styled.h3>

        <styled.p fontSize="24px" color="#242424" maxW="450px" mb="50px">
          Discover stories, thinking, and expertise from writers on any topic.
        </styled.p>

        <Button px="64px" fontSize="20px">
          Start reading
        </Button>
      </styled.div>
    </styled.div>
  );
};

export default Hero;
