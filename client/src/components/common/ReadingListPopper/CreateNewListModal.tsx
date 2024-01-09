import { type FC, type ChangeEvent, useState, useEffect, memo } from "react";
import { styled } from "../../../../styled-system/jsx";
import Modal from "../../ui/Modal";
import CloseIcon from "../../icons/CloseIcon";
import TextInput from "../../ui/TextInput";
import CheckBox from "../../ui/CheckBox";
import Button from "../../ui/Button";

type CreateNewListModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateNewListModal: FC<CreateNewListModalProps> = memo(({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    listName: "",
    listDescription: "",
    visibility: "PUBLIC" as "PUBLIC" | "PRIVATE",
  });

  useEffect(
    () => () => setFormValues({ listName: "", listDescription: "", visibility: "PUBLIC" }),
    [isOpen],
  );

  const listNameInputMaxLength = 50;

  const isError = formValues.listName.length > listNameInputMaxLength;

  const isCreateButtonDisabled = isError || !formValues.listName;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({ ...prevFormValues, [e.target.name]: e.target.value }));
  };

  const handleCheckBoxChange = (isChecked: boolean) =>
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      visibility: isChecked ? "PRIVATE" : "PUBLIC",
    }));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <styled.div display="flex" alignItems="center" justifyContent="space-between" mb="48px">
        <styled.h2 fontSize="20px" fontWeight="700">
          Create new list
        </styled.h2>

        <styled.button
          onClick={onClose}
          color="#6b6b6b"
          _hover={{ color: "#000" }}
          cursor="pointer"
        >
          <CloseIcon />
        </styled.button>
      </styled.div>

      <TextInput
        name="listName"
        placeholder="Give it a name"
        maxLength={listNameInputMaxLength}
        value={formValues.listName}
        onChange={handleInputChange}
        containerCss={{ mb: "16px" }}
      />

      <TextInput
        name="listDescription"
        placeholder="Description"
        maxLength={280}
        value={formValues.listDescription}
        onChange={handleInputChange}
        containerCss={{ mb: "16px" }}
      />

      <CheckBox
        isChecked={formValues.visibility === "PRIVATE"}
        label="Make it private"
        onChange={handleCheckBoxChange}
      />

      <styled.div
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        columnGap="12px"
        mt="40px"
      >
        <Button onClick={onClose} buttonStyle="SUBTLE">
          Cancel
        </Button>

        <Button buttonStyle="STRONG" disabled={isCreateButtonDisabled}>
          Create
        </Button>
      </styled.div>
    </Modal>
  );
});

export default CreateNewListModal;
