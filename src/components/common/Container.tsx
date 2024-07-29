import React from "react";
import styled from "styled-components";

export default function Container({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return <Wrapper id={id}>{children}</Wrapper>;
}

export const Wrapper = styled.section`
  border-top: 1px solid black;
  margin: auto;
  width: 100%;
  margin-top: 100px;
  padding-top: 100px;
`;
