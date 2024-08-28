import styled from "styled-components";
import { projectList } from "../../constants";

export default function ProjectPage() {
  return (
    <ProjectPageContainer>
      {projectList.map((item) => (
        <div key={item.id}>
          <img
            style={{ maxWidth: "300px", height: "auto" }}
            src={item.previewImg}
            alt=""
          />
          <p>{item.title}</p>
          <p>{item.desc}</p>
        </div>
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
