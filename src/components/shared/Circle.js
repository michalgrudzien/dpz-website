import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import colors from "utils/colors";

const Wrapper = styled.div`
  background-color: rgba(${colors.rgb.turquoise}, 0.1);
  border-radius: 100%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 300ms cubic-bezier(0.855, -0.41, 0.275, 1.65);

  ${media.md`
    width: 140px;
    height: 140px;
  `}

  ${media.lg`
    width: 150px;
    height: 150px;
  `}

  ${({ hoverable }) =>
    hoverable &&
    `
    cursor: pointer;
    :hover{
      transform: scale(1.1);
    }
  `}
`;

const Circle = ({ children, hoverable, className }) => (
  <Wrapper className={className} hoverable={hoverable}>
    {children}
  </Wrapper>
);

Circle.defaultProps = {
  hoverable: false,
};

export default Circle;
