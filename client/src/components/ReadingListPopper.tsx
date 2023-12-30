import {
  type MouseEvent,
  type FC,
  useState,
  useMemo,
  memo,
  useCallback,
} from "react";
import { styled } from "../../styled-system/jsx";
import Popper from "./ui/Popper";
import CheckBox from "./ui/CheckBox";
import BookmarkIcon from "./icons/BookmarkIcon";
import LockIcon from "./icons/LockIcon";
import BookmarkFilledIcon from "./icons/BookmarkFilledIcon";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import TextInput from "./ui/TextInput";
import CloseIcon from "./icons/CloseIcon";

type ReadingList = {
  title: string;
  visibility: "PUBLIC" | "PRIVATE";
  isDefaultReadingList?: boolean;
  isBookmarked: boolean;
};

const DEFAULT_READING_LIST: ReadingList = {
  title: "Reading list",
  visibility: "PRIVATE",
  isDefaultReadingList: true,
  isBookmarked: false,
};

const additionalReadingLists: ReadingList[] = [
  { title: "List #1", visibility: "PUBLIC", isBookmarked: false },
  { title: "List #2", visibility: "PRIVATE", isBookmarked: false },
];

const ReadingListPopper = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [readingLists, setReadingLists] = useState<ReadingList[]>(() => [
    DEFAULT_READING_LIST,
    ...additionalReadingLists,
  ]);

  const isListBookmarked = useMemo(
    () => readingLists.some((list) => list.isBookmarked),
    [readingLists]
  );

  const handleOpenPopper = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);

    setReadingLists((currReadingLists) =>
      currReadingLists.map((list) =>
        list.isDefaultReadingList ? { ...list, isBookmarked: true } : list
      )
    );
  };

  const handleClosePopper = () => setAnchorEl(null);

  const handleChange = useCallback((index: number, isChecked: boolean) => {
    setReadingLists((currReadingLists) =>
      currReadingLists.map((currList, currIndex) =>
        currIndex === index
          ? { ...currList, isBookmarked: isChecked }
          : currList
      )
    );
  }, []);

  const handleOpenModal = () => {
    handleClosePopper();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <styled.button
        cursor="pointer"
        onClick={handleOpenPopper}
        color="#6b6b6b"
        _hover={{ color: "#000" }}
      >
        {isListBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
      </styled.button>

      <Popper
        anchorEl={anchorEl}
        isOpen={Boolean(anchorEl)}
        onClose={handleClosePopper}
        placement="bottom-end"
      >
        <styled.div minW="300px" padding="16px">
          {readingLists.map((list, index) => (
            <ReadingListItem
              key={index}
              list={list}
              onChange={handleChange}
              index={index}
            />
          ))}

          <styled.div pt="16px" borderTop="1px solid #f2f2f2">
            <Button onClick={handleOpenModal} buttonStyle="TEXT_STRONG">
              Create new list
            </Button>
          </styled.div>
        </styled.div>
      </Popper>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="48px"
        >
          <styled.h2 fontSize="20px" fontWeight="700">
            Create new list
          </styled.h2>

          <styled.div
            color="#6b6b6b"
            _hover={{ color: "#000" }}
            cursor="pointer"
          >
            <CloseIcon />
          </styled.div>
        </styled.div>

        <TextInput
          placeholder="Give it a name"
          maxLength={50}
          value=""
          onChange={() => {}}
          containerCss={{ mb: "16px" }}
        />

        <TextInput
          placeholder="Description"
          maxLength={280}
          value=""
          onChange={() => {}}
          containerCss={{ mb: "16px" }}
        />

        <CheckBox isChecked label="Make it private" onChange={() => {}} />

        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          columnGap="16px"
          mt="40px"
        >
          <Button buttonStyle="SUBTLE">Cancel</Button>

          <Button buttonStyle="STRONG" disabled>
            Create
          </Button>
        </styled.div>
      </Modal>
    </div>
  );
};

export default ReadingListPopper;

type ReadingListItemProps = {
  index: number;
  list: ReadingList;
  onChange: (index: number, isChecked: boolean) => void;
};

const ReadingListItem: FC<ReadingListItemProps> = memo(
  ({ index, list, onChange }) => (
    <styled.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="16px"
    >
      <CheckBox
        isChecked={list.isBookmarked}
        onChange={(isChecked) => onChange(index, isChecked)}
        label={list.title}
      />

      {list.visibility === "PRIVATE" && <LockIcon />}
    </styled.div>
  )
);
