import styled from "styled-components";
import { mainSkillList, subSkillList } from "../../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "./accordion/Accordion";
import { OpenedIndexType } from "../../types/interface";
import Slider from "./slider/Slider";

export default function Skills() {
  const [openedIndex, setOpenedIndex] = useState<OpenedIndexType>(null);
  return (
    <Container id="skills">
      <h1>Skills</h1>
      <AccordionWrapper>
        {mainSkillList.map((skill) => (
          <Accordion
            {...skill}
            key={skill.id}
            openedIndex={openedIndex}
            setOpenedIndex={setOpenedIndex}
          />
        ))}
      </AccordionWrapper>
      <Slider iconList={subSkillList} />
    </Container>
  );
}

const Container = styled(motion.section)`
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > h1 {
    font-size: 25px;
    /* margin-bottom: 10px; */
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;
