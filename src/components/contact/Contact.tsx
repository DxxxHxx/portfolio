import Container from "../common/Container";
import { FormEvent, useRef } from "react";
import { useInput } from "../../util/useInput";
import ContactInput from "./ContactInput";
import Title from "../common/Title";
import emailjs from "@emailjs/browser";
import { Button, ContactForm } from "./contactStyle";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const name = useInput();
  const email = useInput("ehdgns8339@naver.com");
  const msg = useInput();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLICKEY,
        }
      );

      alert("전송 완료되었습니다. 감사합니다 :)");

      [name, email, msg].forEach((input) => input.resetValue());
      return;
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Container id="Contact">
      <Title text="CONTACT" />

      <ContactForm
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <ContactInput
          inputId="nameInput"
          labelText="Name"
          info={name}
          name="from_name"
        />
        <ContactInput
          inputId="emailInput"
          labelText="Email"
          isText={false}
          info={email}
          name="from_email"
        />
        <ContactInput
          info={msg}
          inputId="messageInput"
          labelText="Message"
          isInput={false}
          name="message"
        />

        <Button>Sumbit</Button>
      </ContactForm>
    </Container>
  );
}
