import { motion } from "framer-motion";
import styled from "styled-components";
import { IProjectList } from "../../types/interface";
import { useMediaQuery } from "../../util/useMediaQuery";

export default function ProjectCard(props: IProjectList) {
  const smSize = useMediaQuery("(min-width: 320px)");
  const mdSize = useMediaQuery("(min-width: 768px)");
  const lgSize = useMediaQuery("(min-width: 1024px)");

  const variants =
    smSize && !mdSize && !lgSize
      ? {
          initial: {
            y: 100,
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        }
      : smSize && mdSize && !lgSize
      ? {
          initial: {
            x: props.id % 2 !== 0 ? -300 : 300,
          },
          whileInView: {
            transition: {
              x: { duration: 1 },
              y: { repeat: Infinity, duration: 1.5 },
            },
            x: props.id % 2 !== 0 ? -50 : 50,
          },
        }
      : smSize && mdSize && lgSize
      ? {
          initial: {
            x: props.id % 2 !== 0 ? -700 : 700,
          },
          whileInView: {
            transition: {
              x: { duration: 1 },
              y: { repeat: Infinity, duration: 1.5 },
            },
            x: props.id % 2 !== 0 ? -100 : 100,
            y: [0, -10, 0],
          },
        }
      : undefined;
  return (
    <Container
      layoutId={props.id + ""}
      variants={variants}
      initial={variants?.initial}
      whileInView={variants?.whileInView}
    >
      <ThumbnailImg
        src={props.previewImg}
        alt={`${props.title} project preview img`}
      />
      <ThumbnailText>
        <h1>{props.title}</h1>
        <BadgeContainer>
          {props.tech.map(
            (item, index) =>
              index <= 5 && <TechBadge key={item}>{item}</TechBadge>
          )}
        </BadgeContainer>
        <DescContainer>
          <span>{props.desc}</span>
        </DescContainer>
        <GoDetail>
          <span>자세히 보기</span>
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
              d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </GoDetail>
      </ThumbnailText>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  display: flex;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

const ThumbnailImg = styled.img`
  display: none;
  /* border: 1px solid black; */
  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    height: 200px;
  }
`;

const ThumbnailText = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  position: relative;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const TechBadge = styled.div`
  /* border: 1px solid black; */
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 5px;
  background-color: #f5e0e0;
`;

const DescContainer = styled.div`
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
  text-wrap: wrap;
`;

const GoDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  gap: 7px;

  svg {
    width: 25px;
  }
`;
