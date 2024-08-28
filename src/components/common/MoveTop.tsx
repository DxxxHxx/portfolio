import styled from "styled-components";
import { useScrollDirection } from "../../util/useScrollDirection";

export default function MoveTop() {
  const { isTop } = useScrollDirection(1000);

  const handleMoveTopClick = () =>
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  return (
    <>
      {!isTop && (
        <Container onClick={handleMoveTopClick}>
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
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </Container>
      )}
    </>
  );
}

const Container = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  border: none;
  z-index: 99;
  background-color: #c3c1c1;

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: black;
    svg {
      color: white;
    }
  }

  @media screen and (min-width: 768px) {
    right: 30px;
    bottom: 30px;

    svg {
      width: 45px;
      height: 45px;
    }
  }
`;
