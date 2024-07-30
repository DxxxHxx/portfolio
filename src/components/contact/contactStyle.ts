import { motion } from "framer-motion";
import styled from "styled-components";

export const TestInput = styled(motion.input)`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const ContactForm = styled(motion.form)`
  border: 1px solid gray;
  width: 80%;
  margin: auto;
  padding: 30px;
  margin: 100px auto;
  border-radius: 20px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  margin: auto;
  width: 100%;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
