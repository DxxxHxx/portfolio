import TypingComponent from "./TypingComponent";
import { infoList, linkList } from "../../constants";
import { Divdier } from "../common/divider/dividerStyle";
import {
  AboutContainer,
  AboutContent,
  Container,
  DescContainer,
  InfoItem,
  LinkContainer,
  LinkImg,
  Links,
  LinkText,
  ProfileImg,
  Title,
} from "./aboutStyle";

export default function About() {
  return (
    <Container id="About">
      <TypingComponent />

      <DescContainer
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam totam
          perspiciatis non nulla vero fugiat cumque repellendus dolorum
          veritatis impedit autem, temporibus in eum nihil magnam architecto.
          Quos, est alias! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Totam, ipsum perferendis aspernatur architecto natus sapiente
          nihil necessitatibus provident officia. A neque officiis obcaecati
          nemo. Saepe reiciendis corrupti ipsum magnam molestiae?
        </span>
      </DescContainer>

      <AboutContainer
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Title>ABOUT</Title>
        <AboutContent>
          <ProfileImg
            src="https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg"
            alt="profile img"
          />

          <ul>
            {infoList.map((item) => (
              <InfoItem key={item.id}>
                <span>{item.emoji}</span>
                <span>{item.text}</span>
              </InfoItem>
            ))}
            <Divdier marginy={15} />

            <LinkContainer>
              {linkList.map((item) => (
                <li key={item.id}>
                  <Links target="_blank" rel="noopener" href={item.href}>
                    <LinkImg loading="lazy" src={item.src} alt={item.alt} />
                    <LinkText>{item.text}</LinkText>
                  </Links>
                </li>
              ))}
            </LinkContainer>
          </ul>
        </AboutContent>
      </AboutContainer>
    </Container>
  );
}
