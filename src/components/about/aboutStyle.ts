import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  margin-top: 160px;
`;

export const DescContainer = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  width: 60%;
  margin: auto;
  border: 1px solid black;
  line-height: 30px;
  margin-bottom: 50px;
`;

export const AboutContainer = styled(motion.div)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 7px;
  width: 80%;
  margin: auto;
  padding: 15px;

  @media screen and (min-width: 768px) {
    max-width: 630px;
    flex-direction: row;
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  margin-top: 30px;
`;

export const InfoItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 5px 0px;
  font-size: 14px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileImg = styled.img`
  display: none;
  width: 200px;
  height: 100%;
  border-radius: 30%;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Links = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const LinkImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const LinkText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
