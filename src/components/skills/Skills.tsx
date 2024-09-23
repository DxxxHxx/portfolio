import styled from "styled-components";
import { skillsList } from "../../constants";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Container id="skills">
      <h1>Skills</h1>

      <MainList>
        {skillsList.map((item) => (
          <SubList
            initial={{ x: item.id % 2 !== 0 ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2 } }}
            key={item.id}
          >
            <h3>{item.name}</h3>
            {item.desc.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </SubList>
        ))}
      </MainList>
    </Container>
  );
}
const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const MainList = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
const SubList = styled(motion.ul)`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;

  h3 {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 20px;
  }
  li {
    list-style: inside;
    margin-bottom: 10px;
  }
`;
