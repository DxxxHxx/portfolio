import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ProjectCardContainer = styled(motion.div)`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
