import React from "react";
import styled from "styled-components";

// styled-components typescirpt 적용
const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? "blue" : "black")};
`;

interface IProps {
  count: number;
}

// 함수의 props typescript 적용
const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
