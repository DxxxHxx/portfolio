import { ISkillList } from "../../types/interface";
import { Bar, BarContainer, BarValue, Container } from "./skillItemsStyle";

export default function SkillItems({ name, value }: ISkillList) {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    >
      <BarContainer>
        <Bar
          initial={{
            width: "0px",
            opacity: 0,
          }}
          whileInView={{
            width: `${value}%`,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        />
        <BarValue>{value}%</BarValue>
      </BarContainer>
      <span>{name}</span>
    </Container>
  );
}
