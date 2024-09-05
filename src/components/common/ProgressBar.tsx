import styled from "styled-components";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <Progress style={{ scaleX }} />;
}
const Progress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, yellow, red);
  width: 100%;
  height: 12px;
  z-index: 1000;
  border-radius: 0px 15px 15px 0px;
  transform-origin: 0%;
`;
