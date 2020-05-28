import React from "react";
import styled, { css } from "styled-components";

import colors from "utils/colors";

export const buttonStyles = css`
  font-family: "Bebas Neue Book", sans-serif;
  color: ${colors.white};
  background-color: ${colors.turquoise};
  padding: 0.95em 4em 0.85em;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  transition: all 150ms ease-in;

  :focus {
    outline: none;
  }

  :hover {
    color: ${colors.turquoise};
    background-color: ${colors.white};
    transform: translateY(-1px);
    box-shadow: inset 0 -2px 0 ${colors.turquoise};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    `
    display: block;
    width: 100%;
  `}
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
