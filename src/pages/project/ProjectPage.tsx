import styled from "styled-components";
import { projectList } from "../../constants";
import { Link } from "react-router-dom";
import Transition from "../../components/common/Transition";

function ProjectPage() {
  return (
    <ProjectPageContainer>
      {projectList.map((item) => (
        <Link to={`/projects/${item.id}`} key={item.id}>
          <img
            style={{ maxWidth: "300px", height: "auto" }}
            src={item.previewImg}
            alt=""
          />
          <p>{item.title}</p>
          <p>{item.desc}</p>
        </Link>
      ))}
    </ProjectPageContainer>
  );
}

const ProjectPageContainer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding-top: 200px;
`;

export default Transition(ProjectPage);
