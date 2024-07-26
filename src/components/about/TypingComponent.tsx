import { TextContainer } from "./typingComponentStyle";
import { TypeAnimation } from "react-type-animation";

export default function TypingComponent() {
  return (
    <TextContainer>
      <TypeAnimation
        sequence={[
          `안녕하세요 : )`,
          500,
          "안녕하세요 : )\n주니어 Frontend 개발자 이동훈입니다.",
          500,
          "",
        ]}
        style={{
          whiteSpace: "pre-line",
          textAlign: "center",
          wordBreak: "break-all",
          display: "block",
        }}
        repeat={Infinity}
        speed={30}
      />
    </TextContainer>
  );
}
