import { IProjectList } from "../../types/interface";
import { useMediaQuery } from "../../util/useMediaQuery";
import {
  BadgeContainer,
  Container,
  DescContainer,
  GoDetail,
  TechBadge,
  ThumbnailImg,
  ThumbnailText,
} from "./projectCardStyle";

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
            y: [0, -5, 0],
            opacity: 1,
            transition: {
              duration: 0.5,
              y: { repeat: Infinity, duration: 1.5 },
            },
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
            y: [0, -5, 0],
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
            y: [0, -5, 0],
          },
        }
      : undefined;
  return (
    <Container
      layoutId={props.id + ""}
      variants={variants}
      initial={variants?.initial}
      whileInView={variants?.whileInView}
      whileHover={{ scale: 1.1 }}
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
