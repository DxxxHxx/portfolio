import styled from "styled-components";
import { IConactInput } from "../../types/interface";
import { useState } from "react";

export default function ContactInput({
  id,
  labelText,
  type,
  value,
  name,
  onChange,
}: IConactInput) {
  const [pass, setPass] = useState<boolean | null>(null);
  const pattern =
    type === "text"
      ? /^.{2,}$/
      : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleCheckValidate = () =>
    !pattern.test(value) ? setPass(false) : setPass(true);

  return (
    <InputContainer $pass={pass}>
      <label htmlFor={id}>{labelText} *</label>
      <input
        onBlur={handleCheckValidate}
        type={type}
        required
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />
      {pass === false && (
        <div>
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
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <span>{labelText}을 입력해주세요.</span>
        </div>
      )}
    </InputContainer>
  );
}

const InputContainer = styled.div<{ $pass: boolean | null }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    border-color: ${(p) => (p.$pass === false ? "red" : "black")};
    outline: none;
    padding: 10px;
    font-size: 18px;

    &:hover,
    &:focus {
      border-color: blue;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: red;
    position: absolute;
    bottom: -30px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
