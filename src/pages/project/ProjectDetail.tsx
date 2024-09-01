import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { projectList } from "../../constants";

export default function ProjectDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("projects");

  const [project] = projectList.filter((item) => item.id === parseInt(id!, 10));

  return (
    <>
      {id && (
        <ModalBg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <Modal layoutId={id}>
            <ClosButton to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </ClosButton>
            <img src={project.previewImg} alt="" />

            <div className="info-container">
              <h1>{project.title}</h1>

              <p>기여도 : {project.Contribution} %</p>
              <p>기간 : {project.period}</p>
              <p>프로젝트 유형 : {project.projectType}</p>
              <p>{project.tech}</p>
              <p>{project.links.deploy}</p>
              <p>{project.links.github}</p>
            </div>

            <div className="desc-container">
              <p>{project.desc}</p>
            </div>
          </Modal>
        </ModalBg>
      )}
    </>
  );
}

const ModalBg = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  padding: 20px 15px;
  overflow-y: auto;
  width: 90%;
  height: 90vh;
  background-color: #333232;
  color: black;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 45% 55%;
  gap: 30px;
  color: white;

  img {
    width: 100%;
    height: 100%;
    float: left;
    border-radius: 15px;
  }

  .info-container {
    /* font-size: 20px; */
  }
  .desc-container {
    grid-column: 1 / span 2;
  }
`;

const ClosButton = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  svg {
    width: 40px;
    height: 40px;
  }
  z-index: 100;
`;
