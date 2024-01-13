import { styled } from "../../../../../styled-system/jsx";
import Avatar from "../../../ui/Avatar";
import Button from "../../../ui/Button";

const CreateResponseForm = () => {
  return (
    <styled.div mt="24px" p="16px" boxShadow="rgba(0, 0, 0, 0.12) 0px 2px 8px">
      <styled.div display="flex" alignItems="center" columnGap="10px">
        <a href="#">
          <Avatar
            size="MD"
            src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
          />
        </a>

        <styled.h4 fontSize="14px">The Bold Italic</styled.h4>
      </styled.div>

      <styled.input
        type="text"
        placeholder="What are you thoughes?"
        fontSize="14px"
        mt="16px"
        _placeholder={{ color: "#6b6b6b", opacity: "0.5" }}
      />

      <styled.div display="flex" alignItems="center" justifyContent="flex-end" mt="24px">
        <styled.div display="flex" alignItems="center" columnGap="16px">
          <Button buttonStyle="TEXT_STRONG" size="SM">
            Cancel
          </Button>

          <Button buttonStyle="STRONG" size="SM">
            Respond
          </Button>
        </styled.div>
      </styled.div>
    </styled.div>
  );
};

export default CreateResponseForm;
