import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import ContactInput from "./ContactInput";
import { useInput } from "../../util/useInput";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [msg, setMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const nameInput = useInput();
  const emailInput = useInput();
  const titleInput = useInput();

  const handleMsgChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMsg(e.currentTarget.value);

  const handleSumbitForm = async (e: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLICKEY,
        }
      );

      alert("전송이 완료되었습니다.");
      [nameInput, emailInput, titleInput].forEach((input) =>
        input.resetValue()
      );
      setMsg("");
    } catch (e) {
      alert("전송 실패.donghun1163@gmail.com로 연락 부탁드립니다.");
    }
  };
  return (
    <Form ref={formRef} onSubmit={handleSumbitForm}>
      <Column>
        <ContactInput
          value={nameInput.value}
          onChange={nameInput.onChange}
          id="name"
          labelText="이름"
          type="text"
          name="from_name"
        />
        <ContactInput
          value={emailInput.value}
          onChange={emailInput.onChange}
          id="email"
          labelText="이메일"
          type="email"
          name="from_email"
        />
      </Column>
      <ContactInput
        value={titleInput.value}
        onChange={titleInput.onChange}
        id="title"
        labelText="제목"
        type="text"
        name="title"
      />

      <MsgContainer>
        <label htmlFor="msg">메세지 *</label>
        <textarea
          value={msg}
          onChange={handleMsgChange}
          id="msg"
          name="message"
          required
        />
      </MsgContainer>
      <SendButton>보내기</SendButton>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  height: auto;
  /* background-color: tomato; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  order: 2;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  textarea {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    height: 200px;
    font-size: 18px;
    padding: 10px 0px;
    resize: none;
    &:hover,
    &:focus {
      border-color: blue;
    }
  }
`;

const SendButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #383838;
    color: whitesmoke;
    transition: all 0.3s ease-in-out;
  }
`;
