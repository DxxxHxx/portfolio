import { Title } from "../about/aboutStyle";
import { skillList } from "../../constants";
import SkillItems from "./SkillItems";
import { Container, SkillItemsContainer } from "./skillStyle";

export default function Skills() {
  return (
    <Container id="Skills">
      <Title>Skills</Title>
      <SkillItemsContainer>
        {skillList.map((skill) => (
          <SkillItems key={skill.id} {...skill} />
        ))}
      </SkillItemsContainer>
    </Container>
  );
}
