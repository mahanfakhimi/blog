import { type FC, useCallback, useMemo, MouseEvent } from "react";
import {
  Slate,
  Editable,
  withReact,
  RenderElementProps,
  useSlate,
  RenderLeafProps,
  ReactEditor,
} from "slate-react";
import { BaseEditor, createEditor, Descendant, Editor } from "slate";
import { HistoryEditor, withHistory } from "slate-history";
import { styled } from "../../../../../styled-system/jsx";
import Avatar from "../../../ui/Avatar";
import Button from "../../../ui/Button";
import BoldIcon from "../../../icons/BoldIcon";
import ItalicIcon from "../../../icons/ItalicIcon";
import { css } from "../../../../../styled-system/css";

type CustomText = { text: string; bold?: true; italic?: true };
type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "this is a text" }],
  },
];

type MarkFormat = "bold" | "italic";

const CreateResponseForm = () => {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      default:
        return <Paragraph {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <styled.div mt="24px" p="16px" shadow="rgba(0, 0, 0, 0.12) 0px 2px 8px">
      <styled.div display="flex" alignItems="center" columnGap="10px">
        <a href="#">
          <Avatar
            size="MD"
            src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
          />
        </a>

        <styled.h4 fontSize="14px">The Bold Italic</styled.h4>
      </styled.div>

      <Slate editor={editor} initialValue={initialValue}>
        <Editable
          placeholder="Enter some text..."
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className={css({ fontSize: "14px", mt: "24px" })}
        />

        <styled.div display="flex" alignItems="center" justifyContent="space-between" mt="24px">
          <styled.div display="flex" alignItems="center" columnGap="16px">
            <MarkButton format="bold" icon={<BoldIcon />} />
            <MarkButton format="italic" icon={<ItalicIcon />} />
          </styled.div>

          <styled.div display="flex" alignItems="center" columnGap="16px">
            <Button buttonStyle="TEXT_STRONG" size="SM">
              Cancel
            </Button>

            <Button buttonStyle="STRONG" size="SM">
              Respond
            </Button>
          </styled.div>
        </styled.div>
      </Slate>
    </styled.div>
  );
};

const isMarkActive = (editor: CustomEditor, format: MarkFormat) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor: CustomEditor, format: MarkFormat) => {
  const isActive = isMarkActive(editor, format);
  isActive ? Editor.removeMark(editor, format) : Editor.addMark(editor, format, true);
};

const Paragraph: FC<RenderElementProps> = ({ attributes, children }) => (
  <p {...attributes}>{children}</p>
);

const MarkButton: FC<{ format: MarkFormat; icon: React.ReactNode }> = ({ format, icon }) => {
  const editor = useSlate();

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleMark(editor, format);
  };

  return (
    <styled.button
      color="#6b6b6b"
      cursor="pointer"
      p="8px"
      rounded="4px"
      bgColor={isMarkActive(editor, format) ? "#f2f2f2" : undefined}
      _hover={{ bgColor: "#f2f2f2" }}
      onMouseDown={handleMouseDown}
    >
      {icon}
    </styled.button>
  );
};

const Leaf: FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;

  return <span {...attributes}>{children}</span>;
};

export default CreateResponseForm;
