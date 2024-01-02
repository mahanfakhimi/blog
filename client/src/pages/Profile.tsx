import { useState } from "react";
import { styled } from "../../styled-system/jsx";
import { css } from "../../styled-system/css";
import TabList, { TabsProperties } from "../components/ui/TabList";
import Header2 from "../components/Header2";
import ProfileAside from "../components/ProfileAside";
import PostList from "../components/PostList";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import SubscribeIcon from "../components/icons/SubscribeIcon";
import ProfileMoreMenu from "../components/ProfileMoreMenu";

const TABS: TabsProperties = [
  { title: "Home", href: "/@wmkdgywkh" },
  { title: "Lists", href: "/@wmkdgywkh/lists" },
  { title: "About", href: "/@wmkdgywkh/about" },
];

const Profile = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (newTabIndex: number) =>
    setActiveTabIndex(newTabIndex);

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
          <styled.div
            mb="48px"
            sm={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <styled.div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              w={{ sm: "100%" }}
              mr={{ sm: "16px", lg: "initial" }}
              mb={{ smDown: "24px" }}
            >
              <styled.div display="flex" alignItems="center" columnGap="20px">
                <Avatar
                  display={{ lg: "none" }}
                  src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
                  size="LG"
                />

                <div>
                  <styled.h1
                    fontSize={{ base: "24px", md: "42px" }}
                    fontWeight="500"
                  >
                    Mahan_fki
                  </styled.h1>

                  <a href="#" className={css({ display: { lg: "none" } })}>
                    <styled.h2
                      color="#6B6B6B"
                      fontSize="16px"
                      _hover={{ color: "#000" }}
                    >
                      1.7K Followers
                    </styled.h2>
                  </a>
                </div>
              </styled.div>

              <ProfileMoreMenu />
            </styled.div>

            <styled.div
              display={{ base: "flex", lg: "none" }}
              alignItems="center"
              columnGap="16px"
            >
              <Button buttonStyle="STRONG" w="100%">
                Follow
              </Button>

              <Button buttonStyle="STRONG" p="0">
                <SubscribeIcon />
              </Button>
            </styled.div>
          </styled.div>

          <TabList
            activeTabIndex={activeTabIndex}
            onTabClick={handleTabClick}
            tabs={TABS}
          />

          <styled.div
            my="48px"
            display="flex"
            flexDirection="column"
            rowGap="48px"
          >
            <PostList />
          </styled.div>
        </styled.div>

        <styled.div gridColumn="3" display={{ lgDown: "none" }}>
          <ProfileAside />
        </styled.div>
      </styled.div>
    </div>
  );
};

export default Profile;
