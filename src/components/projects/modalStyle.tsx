import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 80%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 40%;
  border: 1px solid black;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 80%;
  }
`;

export const ModalTextContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;

  padding: 0px 5px;

  @media screen and (min-width: 768px) {
    height: 80%;
  }
`;
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;

  svg {
    width: 30px;
  }

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

export const Header = styled.h1`
  font-size: 14px;
`;
