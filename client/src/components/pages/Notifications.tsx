import { useState } from "react";
import { styled } from "../../../styled-system/jsx";
import TabList, { TabsProperties } from "../ui/TabList";
import Header2 from "../common/Header2";
import DiscoverAside from "../common/DiscoverAside";
import Avatar from "../ui/Avatar";
import { css } from "../../../styled-system/css";

const TABS: TabsProperties = [
  { title: "All", href: "/me/notifications" },
  { title: "Responses", href: "/me/notifications/responses" },
];

const Notifications = () => {
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
          <styled.h1 fontSize={{ base: "24px", md: "42px" }} fontWeight="500" mb="48px">
            Notifications
          </styled.h1>

          <TabList activeTabIndex={activeTabIndex} onTabClick={handleTabClick} tabs={TABS} />

          <styled.div my="48px" display="flex" flexDirection="column" rowGap="48px">
            {[...Array(25)].map((_, index) => (
              <styled.div key={index} display="flex" alignItems="center" columnGap="10px">
                <a href="#" className={css({ flex: "none" })}>
                  <Avatar
                    size="MD"
                    src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
                  />
                </a>

                <a href="#">
                  <styled.p fontSize="14px" lineClamp="1">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                  </styled.p>

                  <styled.p fontSize="14px" color="#6b6b6b">
                    Nov 22
                  </styled.p>
                </a>
              </styled.div>
            ))}
          </styled.div>
        </styled.div>

        <styled.div gridColumn="3" display={{ lgDown: "none" }}>
          <DiscoverAside />
        </styled.div>
      </styled.div>
    </div>
  );
};

export default Notifications;
