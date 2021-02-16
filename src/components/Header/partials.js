import styled from "styled-components";
import Headroom from "react-headroom";

import { Container } from "styled-bootstrap-grid";

import colors from "utils/colors";
import { boxShadow } from "utils/styles";

export const StyledHeadroom = styled(Headroom)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `}

  .headroom {
    padding: 1em 0;
    height: 64px;
    background-color: ${colors.white};
    border-radius: 0 0 8px 8px;
    box-sizing: content-box;
    transition: height 350ms ease-out, padding 350ms ease-out;
    ${boxShadow};

    ${({ isShrinked }) =>
      isShrinked &&
      `
        height: 40px; 
        padding: 0.5em 0;
      `}
  }

  .headroom--unfixed {
    background-color: transparent;
    box-shadow: none;
  }
`;

export const HeaderContainer = styled(Container)`
  width: auto;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ isShrinked }) =>
    isShrinked &&
    `
      height: 40px; 
    `}
`;
