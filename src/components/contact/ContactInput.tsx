import styled from "styled-components";
import { IUseInput } from "../../types/interface";

export default function ContactInput({
  labelText,
  inputId,
  isText = true,
  isInput = true,
  info,
}: {
  labelText: string;
  inputId: string;
  isText?: boolean;
  isInput?: boolean;
  info: IUseInput;
}) {
  return (
    <Container>
      <label htmlFor={inputId}>{labelText}</label>
      {isInput ? (
        <Input
          type={isText ? "text" : "email"}
          id={inputId}
          value={info.value}
          onChange={info.onChange}
          required
        />
      ) : (
        <TextArea
          required
          id={inputId}
          value={info.value}
          onChange={info.onChange}
        />
      )}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: white;
  border-radius: 20px;
  padding: 10px 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  /* width: 100%; */
`;
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  resize: none;
  height: 200px;
`;
