import { styled } from "../../../../styled-system/jsx";
import { css } from "../../../../styled-system/css";
import Header2 from "../../common/Header2";
import ReadingListPopper from "../../common/ReadingListPopper";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import ProfileMoreMenu from "../../common/ProfileMoreMenu";
import PostClap from "./PostClap";
import PostSocialShareMenu from "./PostSocialShareMenu";
import PostCreatorActionMenu from "../../common/PostCreatorActionMenu";
import SubscribeIcon from "../../icons/SubscribeIcon";
import CreatorMorePost from "./CreatorMorePost";
import FollowButton from "../../common/FollowButton";
import PostResponses from "./PostResponses";

const tags = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
];

const Post = () => {
  const isPostOwnedByViewer = false;

  return (
    <div>
      <Header2 />

      <styled.div maxW="750px" w="100%" mx="auto" px="24px">
        <styled.h1 fontSize={{ base: "32px", md: "42px" }} fontWeight="700" mt="16px">
          Node.JS Trends That Will Dominate the Web in 2024
        </styled.h1>

        <styled.div display="flex" alignItems="center" columnGap="16px" mt="32px">
          <Avatar
            src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
            size="LG"
          />

          <styled.div fontSize="14px">
            <styled.div display="flex" alignItems="center">
              <styled.p _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                Mahan fakhimi
              </styled.p>

              <span>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
              <Button buttonStyle="TEXT_STRONG">Follow</Button>
            </styled.div>

            <styled.div color="#6b6b6b" display="flex" alignItems="center">
              <styled.p>10 min read&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</styled.p>
              <styled.p>Jun 19, 2023</styled.p>
            </styled.div>
          </styled.div>
        </styled.div>

        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt="32px"
          py="16px"
          borderY="1px solid #f2f2f2"
        >
          <styled.div display="flex" alignItems="center" columnGap="32px">
            <PostClap initialClapCount={50} />
            <PostResponses />
          </styled.div>

          <styled.div display="flex" alignItems="center" columnGap="32px">
            <ReadingListPopper />
            <PostSocialShareMenu />
            {isPostOwnedByViewer ? <PostCreatorActionMenu /> : <ProfileMoreMenu />}
          </styled.div>
        </styled.div>

        <styled.img
          w="100%"
          h="350px"
          objectFit="cover"
          mt="32px"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*B2ex_2ZOeWsn9lbAGP-4fQ.png"
        />

        <styled.div my="32px" fontFamily="gt-super" fontSize="20px" lineHeight="32px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam eum repellat! Odit
          doloribus enim facilis asperiores saepe ducimus deleniti id natus, dicta velit, itaque
          autem quas cupiditate excepturi nam aspernatur ipsam? Nam consequuntur harum neque
          consectetur eligendi rerum eveniet quas sed autem eos aperiam, quisquam odio vitae esse
          omnis nostrum labore possimus voluptas, aut impedit non fugiat. Architecto, dolore, odio
          similique ad facilis sapiente minus veniam voluptates necessitatibus omnis assumenda
          explicabo commodi impedit. Id iste magni obcaecati perspiciatis libero. Quos hic beatae
          esse quod, mollitia omnis? Quisquam illum doloremque, rem, eius dolore facilis nulla nisi
          consectetur possimus eos ab?
        </styled.div>

        <styled.div display="flex" flexWrap="wrap" gap="16px">
          {tags.map((tag, index) => (
            <Button key={index} buttonStyle="BRAND_GRAY" flex="0 0 auto">
              {tag}
            </Button>
          ))}
        </styled.div>

        <styled.div display="flex" alignItems="center" justifyContent="space-between" my="32px">
          <styled.div display="flex" alignItems="center" columnGap="32px">
            <PostClap initialClapCount={50} />
            <PostResponses />
          </styled.div>

          <styled.div display="flex" alignItems="center" columnGap="32px">
            <ReadingListPopper />
            <PostSocialShareMenu />
            {isPostOwnedByViewer ? <PostCreatorActionMenu /> : <ProfileMoreMenu />}
          </styled.div>
        </styled.div>
      </styled.div>

      <styled.div borderTop="1px solid #f2f2f2" bgColor="#f9f9f9" py="32px">
        <styled.div maxW="750px" w="100%" mx="auto" px="24px">
          <div>
            <styled.div display="flex" alignItems="center" justifyContent="space-between">
              <Avatar
                src="https://miro.medium.com/v2/resize:fill:110:110/1*kNiE7VKg3MmYmMQ9EABO0Q.jpeg"
                size="XLG"
                mb="16px"
              />

              <styled.div display="flex" alignItems="center" columnGap="16px">
                <FollowButton />

                <Button buttonStyle="STRONG" p="0">
                  <SubscribeIcon />
                </Button>
              </styled.div>
            </styled.div>

            <styled.h2 fontSize="24px" fontWeight="500">
              Written by Mahan_fki
            </styled.h2>

            <a href="#" className={css({ display: "block", mt: "8px" })}>
              <styled.span
                fontSize="14px"
                _hover={{ textDecoration: "underline", cursor: "pointer" }}
              >
                36K Followers
              </styled.span>
            </a>

            <styled.p fontSize="14px" mt="8px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, facere consectetur.
              Ipsum repudiandae earum necessitatibus aliquam, sequi dolore cupiditate, saepe
              quibusdam repellat, et iure. Tempore obcaecati eum quo vero dolor autem, eos delectus
              impedit sequi sapiente! Provident optio quasi rem corporis ex ipsa adipisci.
              Voluptate, harum unde quidem commodi error ex earum totam eius maiores sed ipsa dicta
              explicabo dolor accusantium consequatur ipsam asperiores cumque ullam laudantium
              laboriosam neque molestias sit, facere hic! Esse, ipsum?
            </styled.p>
          </div>

          <styled.div borderY="1px solid #f2f2f2" my="32px" py="32px">
            <styled.h2>More form Mahan_fki</styled.h2>

            <styled.div
              mt="32px"
              display="grid"
              columnGap="32px"
              rowGap="64px"
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
              }}
            >
              {[...Array(10)].map((_, index) => (
                <CreatorMorePost key={index} />
              ))}
            </styled.div>
          </styled.div>

          <Button buttonStyle="SUBTLE" w={{ base: "100%", sm: "auto" }}>
            See all from Mahan_fki
          </Button>
        </styled.div>
      </styled.div>
    </div>
  );
};

export default Post;
