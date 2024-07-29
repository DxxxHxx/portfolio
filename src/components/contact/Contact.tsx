import styled from "styled-components";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import { useInput } from "../../util/useInput";
import ContactInput from "./ContactInput";
import Title from "../common/Title";

export default function Contact() {
  const name = useInput();
  const email = useInput("ehdgns8339@naver.com");
  const msg = useInput();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(msg.value);
    // if (!confirm("이메일을 전송하시겠습니까?")) return;

    // alert("전송완료 되었습니다. 감사합니다 :)");
  };
  return (
    <Container id="Contact">
      <Title text="CONTACT" />

      <ContactForm onSubmit={handleFormSubmit}>
        <ContactInput inputId="nameInput" labelText="Name" info={name} />
        <ContactInput
          inputId="emailInput"
          labelText="Email"
          isText={false}
          info={email}
        />
        <ContactInput
          info={msg}
          inputId="messageInput"
          labelText="Message"
          isInput={false}
        />

        <Button>Sumbit</Button>
      </ContactForm>
    </Container>
  );
}

export const TestInput = styled(motion.input)`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const ContactForm = styled.form`
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

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  margin: auto;
  width: 200px;
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
