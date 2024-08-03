import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  min-width: 250px;
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

export const ThumbnailImg = styled.img`
  display: none;
  /* border: 1px solid black; */
  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    height: 200px;
  }
`;

export const ThumbnailText = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  position: relative;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
export const TechBadge = styled.div`
  /* border: 1px solid black; */
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 5px;
  background-color: #f5e0e0;
`;

export const DescContainer = styled.div`
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 14px;
  text-wrap: wrap;
`;

export const GoDetail = styled.div`
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
