import styled from "styled-components";
import Headroom from "react-headroom";

import colors from "settings/colors";

export const StyledHeadroom = styled(Headroom)`
  .headroom {
    padding: 1em 0;
    height: 64px;
    background-color: ${colors.white};
    transition: height 350ms ease-out, padding 350ms ease-out;
    overflow: hidden;
    border: 1px black solid;

    ${({ isShrinked }) =>
      isShrinked &&
      `
       height: 40px; 
       padding: 0.5em 0;
      `}
  }

  .headroom--unfixed {
    background-color: transparent;
  }
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
