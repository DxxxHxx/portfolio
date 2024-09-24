import styled from "styled-components";
import { skillsList } from "../../constants";
import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "./accordion/Accordion";
import { OpenedIndexType } from "../../types/interface";

export default function Skills() {
  const [openedIndex, setOpenedIndex] = useState<OpenedIndexType>(null);
  return (
    <Container id="skills">
      <h1>Skills</h1>
      <AccordionWrapper>
        {skillsList.map((skill) => (
          <Accordion
            {...skill}
            key={skill.id}
            openedIndex={openedIndex}
            setOpenedIndex={setOpenedIndex}
          />
        ))}
      </AccordionWrapper>
    </Container>
  );
}

const Container = styled(motion.section)`
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  > h1 {
    font-size: 25px;
    margin-bottom: 100px;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;
