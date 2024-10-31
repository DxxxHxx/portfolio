import styled from "styled-components";
import { projectList } from "../../constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import ProjectDetail from "../../pages/project/ProjectDetail";
import { useRef } from "react";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("projects");

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", `-95%`]);

  const marginBottom = useTransform(scrollYProgress, [0, 1], ["10vh", "100vh"]);

  return (
    <Container ref={ref} id="projects">
      <Title style={{ marginBottom }}>
        <h1>projects</h1>
      </Title>
      <Content style={{ x }}>
        {projectList.map((item) => (
          <Link to={`/?projects=${item.id}`} key={item.id}>
            <motion.div layoutId={item.id + ""} whileHover={{ y: -20 }}>
              <ProjectImg>
                <source srcSet={item.previewImg.webp} type="image/webp" />
                <source srcSet={item.previewImg.png} type="image/png" />
                <img src={item.previewImg.png} alt={`${item.title} image`} />
              </ProjectImg>
              <p>{item.title}</p>
            </motion.div>
          </Link>
        ))}
      </Content>
      <AnimatePresence>{id && <ProjectDetail id={id} />}</AnimatePresence>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 400vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const Title = styled(motion.div)`
  position: sticky;
  top: 20px;
  left: 0;
  border-bottom: 2px solid white;
  h1 {
    font-size: 25px;
    padding-bottom: 20px;
  }
`;

const Content = styled(motion.div)`
  position: sticky;
  top: 25%;
  left: 0;
  margin: 15vh 0px;
  display: inline-flex;
  gap: 50px;
`;

const ProjectImg = styled.picture`
  img,
  source {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
