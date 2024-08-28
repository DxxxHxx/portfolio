import { useParams } from "react-router-dom";
import { projectList } from "../../constants";
import styled from "styled-components";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project] = projectList.filter((item) => item.id === Number(id));
  return <Container>{project.id}</Container>;
}

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
`;
