import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 30px;
  font-size: 1.2em;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    width: 60%;
    font-size: 1.5em;
    line-height: 50px;
    height: 150px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2em;
  }
`;
