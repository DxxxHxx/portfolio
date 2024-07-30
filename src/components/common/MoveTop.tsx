import { useEffect, useState } from "react";
import styled from "styled-components";

export default function MoveTop() {
  const [visible, SetVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        SetVisible(true);
        return;
      }
      SetVisible(false);
    };

    const observerOptions = { threshold: 0.5, rootMargin: "100px" };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const $target = document.querySelector("#About")!;
    observer.observe($target);

    return () => observer.unobserve($target);
  }, []);

  const handleMoveTopClick = () =>
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  return (
    <>
      {visible && (
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

const Container = styled.div`
  position: fixed;
  background-color: white;
  bottom: 10px;
  right: 10px;
  width: 35px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
`;
