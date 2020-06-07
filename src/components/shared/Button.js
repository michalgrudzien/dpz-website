import React from "react";
import styled, { css } from "styled-components";
import { media } from "styled-bootstrap-grid";

import colors from "utils/colors";

export const buttonStyles = css`
  display: inline-block;
  font-family: "Bebas Neue Book", sans-serif;
  color: ${colors.white};
  background-color: ${colors.turquoise};
  padding: 0.75em 2.5em 0.65em;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
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

  ${media.md`
    padding: 0.95em 2.5em 0.85em;
    font-size: 1.1em;
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
    display: block;
    width: 100%;
  `}

  ${({ white }) =>
    white &&
    `
    background-color: ${colors.white};
    color: ${colors.turquoise};

    :hover {
      color: ${colors.white};
      background-color: ${colors.turquoise};
      box-shadow: inset 0 -2px ${colors.white};
    }
  `}

  ${({ naked, white }) =>
    naked &&
    `
    background-color: transparent;
    color: ${white ? colors.white : colors.turquoise};
    text-decoration: underline;

    :hover {
      background-color: transparent;
      color: ${white ? colors.white : colors.turquoise};
      text-decoration: none;
      box-shadow: inset 0 -2px ${white ? colors.white : colors.turquoise};
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    background-color: ${colors.lightGrey};
    color: ${colors.darkGrey};
  `}
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
