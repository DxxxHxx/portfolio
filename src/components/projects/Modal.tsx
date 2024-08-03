import { IProjectList } from "../../types/interface";
import { BadgeContainer, TechBadge } from "./projectCardStyle";
import {
  CloseButton,
  Container,
  ModalImg,
  ModalTextContainer,
} from "./modalStyle";

interface IModal extends IProjectList {
  layoutId: string;
  onClick: () => void;
}
export default function Modal(props: IModal) {
  return (
    <Container layoutId={props.layoutId}>
      <CloseButton onClick={props.onClick}>
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </CloseButton>

      <ModalImg src={props.previewImg} alt={`${props.title} img`} />

      <ModalTextContainer>
        <h1>
          {props.title}, 기여도 {props.Contribution}%
        </h1>
        <span>{props.projectType}</span>
        <span>제작기간 : {props.period}</span>

        <BadgeContainer>
          {props.tech.map((item) => (
            <TechBadge key={item}>{item}</TechBadge>
          ))}
        </BadgeContainer>

        <p>{props.desc}</p>
      </ModalTextContainer>
    </Container>
  );
}
