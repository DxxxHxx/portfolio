import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { projectList } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDetail from "../../pages/project/ProjectDetail";

export default function Projects() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("projects");
  return (
    <ProjectContainer id="projects">
      <Title>
        <h1>Projects</h1>
        <Link to={"/projects"}>
          <button>View all</button>
        </Link>
      </Title>

      <ImgWrapper>
        {projectList.map((item) => (
          <Link to={`/?projects=${item.id}`} key={item.id}>
            <motion.div layoutId={item.id + ""} whileHover={{ scale: 1.1 }}>
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
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  margin-bottom: 25px;
  h1 {
    font-size: 25px;
  }

  button {
    background-color: transparent;
    border-radius: 20px;
    color: white;
    border: 1px solid white;
    padding: 7px 15px;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }

    transition: all 0.2s ease-in-out;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;

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
