import styled from "styled-components";

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
