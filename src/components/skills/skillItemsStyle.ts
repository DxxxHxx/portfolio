import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  margin: 30px 0px 0px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
`;
export const BarContainer = styled.div`
  width: 90%;
`;
export const Bar = styled(motion.div)`
  height: 5px;
  background: linear-gradient(to left, blue, red);
  border-radius: 30px;
`;
export const BarValue = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;
