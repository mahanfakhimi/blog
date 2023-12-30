import { useState } from "react";
import { styled } from "../../styled-system/jsx";
import DiscoverAside from "../components/DiscoverAside";
import PostList from "../components/PostList";
import Header2 from "../components/Header2";
import TabList, { TabsProperties } from "../components/ui/TabList";

const TABS: TabsProperties = [
  { title: "Tab #1", href: "#" },
  { title: "Tab #2", href: "#" },
  { title: "Tab #3", href: "#" },
  { title: "Tab #4", href: "#" },
  { title: "Tab #5", href: "#" },
  { title: "Tab #6", href: "#" },
  { title: "Tab #7", href: "#" },
  { title: "Tab #8", href: "#" },
  { title: "Tab #9", href: "#" },
  { title: "Tab #10", href: "#" },
  { title: "Tab #11", href: "#" },
  { title: "Tab #12", href: "#" },
  { title: "Tab #13", href: "#" },
  { title: "Tab #14", href: "#" },
  { title: "Tab #15", href: "#" },
  { title: "Tab #16", href: "#" },
  { title: "Tab #17", href: "#" },
  { title: "Tab #18", href: "#" },
  { title: "Tab #19", href: "#" },
  { title: "Tab #20", href: "#" },
];

const Home = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (newTabIndex: number) => setActiveTabIndex(newTabIndex);

  return (
    <div>
      <Header2 />
      <styled.div
        maxW="1200px"
        w="100%"
        mx="auto"
        px="24px"
        display="grid"
        gridTemplateColumns="repeat(8,1fr)"
        columnGap="48px"
      >
        <styled.div gridColumn={{ base: "8", lg: "5" }} mt="48px">
          <TabList activeTabIndex={activeTabIndex} onTabClick={handleTabClick} tabs={TABS} />

          <styled.div my="48px">
            <PostList />
          </styled.div>
        </styled.div>

        <styled.div gridColumn="3" display={{ lgDown: "none" }}>
          <DiscoverAside />
        </styled.div>
      </styled.div>
    </div>
  );
};

export default Home;
