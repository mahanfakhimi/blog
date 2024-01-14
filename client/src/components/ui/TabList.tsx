import { type FC, useRef, useEffect, useState } from "react";
import { styled } from "../../../styled-system/jsx";
import Tab from "./Tab";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

export type TabsProperties = {
  title: string;
  href: string;
}[];

type TabListProps = {
  tabs: TabsProperties;
  activeTabIndex: number;
  onTabClick: (index: number) => void;
};

const TabList: FC<TabListProps> = ({ tabs, onTabClick, activeTabIndex }) => {
  const [isShowArrowLeft, setIsShowArrowLeft] = useState(false);
  const [isShowArrowRight, setIsShowArrowRight] = useState(false);

  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!tabListRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = tabListRef.current;

      setIsShowArrowLeft(scrollLeft > 0);
      setIsShowArrowRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    };

    document.fonts.ready.then(() => {
      handleScroll();

      tabListRef.current?.addEventListener("scroll", handleScroll);
    });

    return () => tabListRef.current?.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const handleArrowClick = (amount: number) => tabListRef.current?.scrollBy({ left: amount });

  const renderArrow = (direction: "right" | "left") => {
    return (
      <styled.div
        color="#6b6b6b"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgImage="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.9) 50%, rgb(255, 255, 255) 75%)"
        pos="absolute"
        pr="48px"
        top="0"
        left={direction === "left" ? "-1px" : undefined}
        right={direction === "right" ? "-1px" : undefined}
        rotate={direction === "right" ? "180deg" : undefined}
        _hover={{ color: "#000" }}
      >
        <styled.button
          cursor="pointer"
          onClick={() => handleArrowClick(direction === "right" ? 100 : -100)}
        >
          <ArrowLeftIcon />
        </styled.button>
      </styled.div>
    );
  };

  return (
    <styled.div
      w="100%"
      display="flex"
      alignItems="center"
      shadow="#f2f2f2 0px -1px 0px inset"
      pos="relative"
    >
      {isShowArrowLeft && renderArrow("left")}

      <styled.div
        ref={tabListRef}
        display="flex"
        alignItems="center"
        columnGap="32px"
        overflowX="scroll"
        scrollbar="hidden"
        scrollBehavior="smooth"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            title={tab.title}
            onTabClick={onTabClick}
            isActive={index === activeTabIndex}
            clickArg={index}
            href={tab.href}
          />
        ))}
      </styled.div>

      {isShowArrowRight && renderArrow("right")}
    </styled.div>
  );
};

export default TabList;
