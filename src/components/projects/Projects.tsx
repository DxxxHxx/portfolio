import Container from "../common/Container";
import Title from "../common/Title";
import { AnimatePresence } from "framer-motion";
import { useState, MouseEvent, useEffect } from "react";
import { projectList } from "../../constants";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { ModalContainer, ProjectCardContainer } from "./projectsStyle";

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
          <div key={item.id}>
            {" "}
            <a onClick={handleCardClick} key={item.id} href={`${item.id}`}>
              <ProjectCard key={item.id} {...item} />
            </a>
            <AnimatePresence>
              {showModal && (
                <ModalContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Modal
                    onClick={handleShowModal}
                    layoutId={modalId!}
                    {...item}
                  />
                </ModalContainer>
              )}
            </AnimatePresence>
          </div>
        ))}
      </ProjectCardContainer>
    </Container>
  );
}
