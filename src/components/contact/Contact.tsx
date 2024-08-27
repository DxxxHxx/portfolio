import styled from "styled-components";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <TextWrapper>
        <div>
          <h1>Let's Talk</h1>
          <p>Contact us today to discuss your marketing needs</p>
        </div>
        <ContactInfo>
          <p>donghun1163@gmail.com</p>
          <p>010-8339-5659</p>
        </ContactInfo>
      </TextWrapper>
      <ContactInfo>
        <p>donghun1163@gmail.com</p>
        <p>010-8339-5659</p>
      </ContactInfo>

      <EmailForm />
    </ContactContainer>
  );
}

const ContactContainer = styled.section`
  width: 100%;
  background-color: whitesmoke;
  padding: 30px 20px;
  display: grid;

  > div:nth-child(2) {
    order: 3;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:nth-child(1) {
    h1 {
      font-weight: bold;
      font-size: 30px;
    }
    p {
      font-size: 18px;
      margin: 15px 0px 30px 0px;
    }
  }
  > div:nth-child(2) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    > div:nth-child(1) {
      h1 {
        font-weight: bold;
        font-size: 50px;
      }
      p {
        font-size: 20px;
      }
    }
    > div:nth-child(2) {
      display: block;
    }
  }
`;
const ContactInfo = styled.div`
  display: block;
  font-size: 18px;
  p:first-child {
    margin: 30px 0px 8px 0px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  @media screen and (min-width: 768px) {
    display: none;
    font-size: 22px;
  }
`;
