import styled from "styled-components";
import { splitText } from "../../util/splitText";
import {
  landingText,
  staggerContainerVariants,
  staggerItemVariants,
} from "../../constants";
import { motion } from "framer-motion";

export default function Landing() {
  const handleMoveToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <LandingContainer id="home">
      <TextContainer
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {splitText(landingText).map((text) => (
          <Text variants={staggerItemVariants} key={text}>
            {text}{" "}
          </Text>
        ))}
      </TextContainer>

      <ArrowButton
        onClick={handleMoveToAbout}
        initial={{ y: 0 }}
        animate={{
          y: [0, 5, 0],
          transition: { duration: 1.5, repeat: Infinity },
        }}
        whileHover={{ scale: 1.2 }}
      >
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
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </ArrowButton>
      <div className="landing-bg"></div>
    </LandingContainer>
  );
}

const LandingContainer = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;

const TextContainer = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 30px;
  column-gap: 10px;

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

const Text = styled(motion.h1)`
  font-size: 30px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 70px;
  }
`;

const ArrowButton = styled(motion.button)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  border: none;
  background-color: transparent;
  bottom: 50px;
  cursor: pointer;
  width: fit-content;

  svg {
    width: 50px;
    height: 50px;

    @media screen and (min-width: 1024px) {
      width: 70px;
      height: 70px;
    }
  }
`;
