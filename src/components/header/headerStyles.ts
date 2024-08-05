import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.header)`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  display: block;
  position: fixed;
  height: 60px;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
  background-color: white;
  opacity: 0.9;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 120px;
  height: 50px;
  background-color: black;
  display: none;
  margin-left: 30px;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 8px;
  font-size: 14px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    gap: 25px;
    margin-right: 30px;
  }
`;

export const MenuItem = styled(motion.li)`
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  position: relative;
`;
export const Dot = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  bottom: -15px;
  left: 0;
  right: 0;
  margin: auto;
`;
