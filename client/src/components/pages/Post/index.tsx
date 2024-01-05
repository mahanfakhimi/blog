import { styled } from "../../../../styled-system/jsx";
import Header2 from "../../common/Header2";
import ReadingListPopper from "../../common/ReadingListPopper";
import RespondIcon from "../../icons/RespondIcon";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import ProfileMoreMenu from "../Profile/ProfileMoreMenu";
import PostClap from "./PostClap";
import PostSocialShareMenu from "./PostSocialShareMenu";

const Post = () => {
  return (
    <div>
      <Header2 />

      <styled.div maxW="750px" w="100%" mx="auto" px="24px">
        <styled.h1 fontSize="42px" fontWeight="700" mt="16px">
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

            <styled.button
              color="#6b6b6b"
              display="flex"
              alignItems="center"
              columnGap="8px"
              cursor="pointer"
              _hover={{ color: "#000" }}
            >
              <RespondIcon />
              <styled.p fontSize="14px">252</styled.p>
            </styled.button>
          </styled.div>

          <styled.div display="flex" alignItems="center" columnGap="32px">
            <ReadingListPopper />
            <PostSocialShareMenu />
            <ProfileMoreMenu />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis provident
          repudiandae alias labore quo aspernatur, quod deleniti magnam corrupti, libero officiis,
          ut ea illo eveniet obcaecati nihil veniam nobis! Ullam odio, optio deserunt similique
          exercitationem aliquid, rem porro expedita provident quo corporis, minima enim temporibus
          alias asperiores inventore architecto a ut doloremque tenetur eveniet illo. At officia
          harum doloribus quo ab repudiandae debitis! Doloremque suscipit commodi aperiam error
          quia, tenetur vitae molestiae consequuntur, impedit omnis autem facilis iusto animi
          officia sapiente eligendi cupiditate modi architecto maiores! Minima repellendus itaque
          blanditiis quos corporis, nam, illo neque eius facilis officia magnam est praesentium
          expedita repudiandae pariatur possimus natus ratione asperiores aliquam, magni commodi
          ipsam rerum vitae modi. Doloribus fuga, natus eos mollitia dignissimos laudantium,
          accusamus vero nihil officiis, similique consectetur ab minima. Modi hic beatae, eveniet
          vel reprehenderit aspernatur, exercitationem voluptatum, totam laudantium quis
          necessitatibus eum. Nemo odio animi ut quas molestias? Pariatur nemo tenetur, sapiente
          deserunt laboriosam voluptates error odit sit numquam perferendis dolorem beatae
          inventore. Necessitatibus laborum obcaecati, possimus quisquam, quod enim animi ipsum
          tempore assumenda praesentium reprehenderit deserunt beatae recusandae eum perspiciatis,
          quibusdam voluptatum atque modi sit voluptates excepturi quo. Quas maiores voluptates iste
          assumenda mollitia deserunt expedita, reprehenderit numquam, quo nulla illum repudiandae
          dolores. Explicabo ipsa quisquam aliquam fugit amet id nam dicta illum temporibus nulla,
          asperiores sequi ea ab facilis iste natus consequuntur quae aut libero laborum, molestiae
          iusto. Corporis minima quasi sed, deleniti reprehenderit excepturi delectus nisi cumque
          architecto dignissimos? Voluptas ab soluta aliquid blanditiis cumque quisquam quae
          veritatis! Eum minima neque nemo? Perferendis aspernatur laudantium architecto soluta,
          odit tenetur laboriosam ipsa placeat veritatis suscipit velit fuga exercitationem culpa
          consequuntur non praesentium voluptatum veniam minima nihil nulla commodi ea! Fugiat
          voluptatem itaque qui aliquam atque dolor hic doloribus. Ad consequatur odit quam dolor
          aliquam ipsam! Labore a sequi voluptatibus omnis amet possimus rerum provident dignissimos
          incidunt ullam! Quisquam voluptate accusantium omnis, repellendus consequuntur nobis,
          quasi laboriosam itaque, numquam officiis sed quibusdam sit! Molestiae eaque dolore
          possimus ab neque totam, in, aliquam, accusamus blanditiis vero amet aut quae rerum ea non
          placeat exercitationem labore. Omnis repellat, in, perferendis mollitia nesciunt totam sit
          beatae ratione provident, nisi aspernatur recusandae error? Perferendis eveniet,
          obcaecati, asperiores sunt eum adipisci voluptas cumque velit mollitia itaque expedita
          distinctio nostrum nobis possimus necessitatibus veritatis voluptate voluptatibus commodi
          eaque ad voluptates saepe sit. Officia saepe quasi eos aspernatur perspiciatis repellendus
          esse maxime ex modi dolorum odit voluptates, explicabo cumque at sequi amet velit
          consectetur. Voluptatum atque, vitae voluptate ducimus sequi repellendus corrupti
          similique in earum, magnam omnis animi at? Dicta consequatur, eum explicabo velit aperiam
          itaque suscipit quaerat omnis! Inventore, fugiat omnis dolorum laborum quidem aperiam
          doloremque perspiciatis quasi tempora ipsa corporis, laboriosam necessitatibus. Aliquid
          animi voluptatibus quibusdam incidunt, quam dolores unde asperiores laudantium ullam earum
          repudiandae? Deleniti exercitationem tempore et nesciunt laudantium sunt rerum
          voluptatibus laborum nihil voluptate reprehenderit, veniam amet cupiditate repudiandae
          illum aliquam neque iusto sit nobis id non vel aperiam! Delectus nobis minus error
          repudiandae non, laborum quas voluptatibus?
        </styled.div>
      </styled.div>
    </div>
  );
};

export default Post;
