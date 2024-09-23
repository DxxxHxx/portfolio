import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Error() {
  return (
    <Container>
      <h1>Not Found</h1>
      <StyledLink to={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span>홈으로 이동</span>
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: tomato; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  h1 {
    font-size: 50px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 200px;
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;
