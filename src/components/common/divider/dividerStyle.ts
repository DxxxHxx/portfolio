import styled from "styled-components";

export const Divdier = styled.hr<{ marginy?: number }>`
  border-top: 1px solid gray;
  margin: ${(props) => (props.marginy ? `${props.marginy}px` : "50px")} 0px;
  width: 100%;
`;
