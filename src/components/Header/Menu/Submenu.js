import React from "react";
import styled from "styled-components";

import colors from "utils/colors";

//TODO: implement using anchors, add proptypes
const SubmenuList = styled.ul`
  position: absolute;
  top: 2em;
  padding: 0 1em;
  right: -1em;
  width: fit-content;

  transition: all 50ms ease-in;

  ${({ colorTheme, isShrinked }) => {
    if (!isShrinked) {
      if (colorTheme === "light") {
        return `
                color: ${colors.white};
                background-color: transparent;
            `;
      } else {
        return `
                color: ${colors.secondary};
                background-color: transparent;
            `;
      }
    } else {
      return `
            padding: 1em;
            color: ${colors.secondary};
            background-color: white;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        `;
    }
  }}
`;

const SubmenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 140px;

  transition: all 150ms ease-in;
  opacity: 0;
  transform: translateY(0em);
  pointer-events: none;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    transform: translateY(0.2em);
    pointer-events: all;
  `}
`;

const Submenu = ({ children, isOpen, colorTheme, isShrinked }) => (
  <SubmenuWrapper isOpen={isOpen}>
    <SubmenuList colorTheme={colorTheme} isShrinked={isShrinked}>
      {children}
    </SubmenuList>
  </SubmenuWrapper>
);

export default Submenu;
