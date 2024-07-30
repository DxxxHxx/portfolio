import { IUseInput } from "../../types/interface";
import { Container, Input, TextArea } from "./contactInputStyle";

export default function ContactInput({
  labelText,
  inputId,
  isText = true,
  isInput = true,
  info,
  name,
}: {
  labelText: string;
  inputId: string;
  isText?: boolean;
  isInput?: boolean;
  info: IUseInput;
  name: string;
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
          name={name}
        />
      ) : (
        <TextArea
          required
          id={inputId}
          value={info.value}
          onChange={info.onChange}
          name={name}
        />
      )}
    </Container>
  );
}
