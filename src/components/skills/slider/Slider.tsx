import styled from "styled-components";
import { motion } from "framer-motion";
import { IIconList } from "../../../types/interface";

export default function Slider({ iconList }: { iconList: IIconList[] }) {
  const duplicateArr = [...iconList, ...iconList];
  return (
    <SilderContainer>
      <h2>이외에 자주 사용하는 기술들입니다 :)</h2>
      <motion.div
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          },
        }}
      >
        {duplicateArr.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0"
            style={{ width: `${100 / iconList.length}%`, flexShrink: 0 }}
          >
            <Slide>
              <img src={item.logo} alt="" />
            </Slide>
          </div>
        ))}
      </motion.div>
    </SilderContainer>
  );
}

const SilderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  h2 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 600;
    text-align: center;
  }
  > div {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 25px;
      text-align: start;
    }
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  img {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 70px;
      height: 70px;
    }
  }
`;
