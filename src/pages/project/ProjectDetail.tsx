import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { projectList } from "../../constants";
import { useCloseModal } from "../../util/useCloseModal";
// import ProjectImg from "../../components/projects/ProjectImg";

export default function ProjectDetail({ id }: { id: string }) {
  const project = projectList.find((item) => item.id === parseInt(id));

  useCloseModal(!!id);
  return (
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
        {project ? (
          <>
            {/* <ProjectImg previewImg={project.previewImg} title={project.title} /> */}
            <div style={{ border: "1px solid black" }}></div>

            <div className="info-container">
              <h1>{project.title}</h1>

              <p>기여도 : {project.Contribution} %</p>
              <p>기간 : {project.period}</p>
              <p>프로젝트 유형 : {project.projectType}</p>
              <ul>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="link-container">
                <a
                  target="_blank"
                  href={project.links.deploy}
                  style={{ color: project.links.deploy ? "black" : "gray" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href={project.links.github}
                  style={{ color: project.links.github ? "black" : "gray" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="desc-container">
              <p>{project.desc}</p>
            </div>
          </>
        ) : (
          <NotFoundText>Not Found</NotFoundText>
        )}
      </Modal>
    </ModalBg>
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
  width: 90%;
  height: 90vh;
  background-color: whitesmoke;
  color: black;
  overflow-y: auto;

  img {
    width: 100%;
    height: 50%;
    border-radius: 15px;
  }

  .info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 30px;
    margin: 30px 0px;
    h1 {
      font-size: 25px;
      font-weight: bold;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      li {
        background-color: black;
        color: white;
        padding: 7px 10px;
        font-size: 14px;
        border-radius: 15px;
      }
    }
  }
  .desc-container {
    text-align: center;
  }
  .link-container {
    display: flex;
    gap: 20px;
    a > svg {
      width: 35px;
      height: 35px;
      &:hover {
        scale: 1.1;
        transition: all 0.2 ease-in-out;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 60% 40%;
    gap: 30px;
    overflow-y: hidden;

    img {
      height: 100%;
    }

    .info-container {
      width: 90%;

      align-items: start;
      row-gap: 0px;
      margin: 0px;
      h1 {
        font-size: 30px;
      }
    }
    .desc-container {
      grid-column: 1 / span 2;
      text-align: start;
    }
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

const NotFoundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;
