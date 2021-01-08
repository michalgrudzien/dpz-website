import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import Circle from "./Circle";
import colors from "utils/colors";

const Wrapper = styled.div`
  display: block;
  text-align: center;
  color: ${colors.primary};
  font-family: "Bebas Neue", sans-serif;
`;

const Number = styled.span`
  display: block;
  font-size: 4em;
`;

const Label = styled.span`
  font-size: 1.2em;
`;

const CircleNumber = ({ number, label, ...rest }) => (
  <Circle {...rest}>
    <Wrapper>
      <Number>
        <CountUp end={number} duration={2} />
      </Number>
      <Label>{label}</Label>
    </Wrapper>
  </Circle>
);

export default CircleNumber;
