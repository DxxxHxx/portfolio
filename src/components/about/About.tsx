import styled from "styled-components";
import { motion } from "framer-motion";

export default function About() {
  return (
    <AboutContainer id="about">
      <TextContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.5 },
          }}
        >
          <p>ABOUT</p>
          <h1>What We Do</h1>
        </motion.div>

        <p>
          This is a space to share more about the business: who's behind it,
          what it does and what this site has to offer. It’s an opportunity to
          tell the story behind the business or describe a special service or
          product it offers. You can use this section to share the company's
          history or highlight a particular feature that sets it apart from
          competitors.
        </p>
      </TextContainer>
      <ProfileImg
        style={{ border: " 1px solid black" }}
        src=""
        alt="profile img"
      />
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div > p {
    font-size: 22px;
    margin-bottom: 10px;
  }

  div > h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  p {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;

    div > p {
      font-size: 25px;
      margin-bottom: 20px;
    }

    div > h1 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  padding: 15px;

  @media screen and (min-width: 768px) {
    padding: 20px 0px 20px 20px;
  }
`;
