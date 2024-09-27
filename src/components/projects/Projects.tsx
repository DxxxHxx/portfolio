import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { projectList } from "../../constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import ProjectDetail from "../../pages/project/ProjectDetail";
import { useRef } from "react";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("projects");

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <ProjectContainer ref={ref} id="projects">
      <Title>
        <h1>Projects</h1>
      </Title>

      <ImgWrapper style={{ x }}>
        {projectList.map((item) => (
          <Link to={`/?projects=${item.id}`} key={item.id}>
            <motion.div layoutId={item.id + ""} whileHover={{ y: -20 }}>
              <Img src={item.previewImg} alt={`${item.title} img`} />
              <p>
                {item.title} {item.id}
              </p>
            </motion.div>
          </Link>
        ))}
      </ImgWrapper>

      <AnimatePresence>{id && <ProjectDetail id={id} />}</AnimatePresence>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.section`
  width: 100%;
  height: 150vh;
  /* overflow-x: hidden; */
  background-color: black;
  color: white;
  /* padding: 0 20px; */
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  border-bottom: 1px solid white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: black;
  h1 {
    font-size: 25px;
    padding: 20px;
  }
`;

const ImgWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  position: sticky;
  top: 100px;
  left: 0;
  padding: 20px;
  margin-top: 25px;

  div {
    cursor: pointer;
  }

  p {
    font-size: 18px;
  }
`;
const Img = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;
