import styled from "styled-components";
import Container from "../common/Container";
import Title from "../common/Title";
import { AnimatePresence, motion } from "framer-motion";
import { useState, MouseEvent, useEffect } from "react";
import { projectList } from "../../constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState<null | string>(null);

  const handleCardClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setModalId(e.currentTarget.getAttribute("href"));

    handleShowModal();
  };

  useEffect(() => {
    if (!showModal) return;

    const handleCloseModal = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
      return;
    };

    window.addEventListener("keydown", (e) => handleCloseModal(e));

    return window.removeEventListener("keydown", handleCloseModal);
  }, [showModal]);

  const handleShowModal = () => setShowModal((prev) => !prev);
  return (
    <Container id="Projects">
      <Title text="PROJECTS" />

      <ProjectCardContainer>
        {projectList.map((item) => (
          <a onClick={handleCardClick} key={item.id} href={`${item.id}`}>
            <ProjectCard key={item.id} {...item} />
          </a>
        ))}
      </ProjectCardContainer>

      <AnimatePresence>
        {showModal && (
          <ModalContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Modal onClick={handleShowModal} layoutId={modalId!} />
          </ModalContainer>
        )}
      </AnimatePresence>
    </Container>
  );
}

export const ModalContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Modal = styled(motion.div)`
  width: 80%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
`;

export const ProjectCardContainer = styled(motion.div)`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
