import styled from "styled-components";

export default function Title({ text }: { text: string }) {
  return <TitleWrapper>{text}</TitleWrapper>;
}

export const TitleWrapper = styled.h1`
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
