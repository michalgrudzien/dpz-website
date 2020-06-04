import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "styled-bootstrap-grid";

import colors from "./colors";
import fonts from "./fonts";

//TODO: Write global styles for :focus states, selection css
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
   
  html, body {
    font-size: 12px;

    ${media.md`
      font-size: 14px;
    `}

    ${media.lg`
      font-size: 16px;
    `}

    color: ${colors.default};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    *::selection {
      background: ${colors.primary};
      color: ${colors.white};
    }
  }

  p, h1, h2, h3, h4, h5, h6 {
    line-height: 1.65;
  }

  p {
    font-size: 1.1em;
    margin-bottom: 1.15rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Bebas Neue Regular', sans-serif;
    color: ${colors.secondary};
    font-weight: 300;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {font-size: 2.441em;}

  h3 {font-size: 1.953em;}

  h4 {font-size: 1.563em;}

  h5 {font-size: 1.25em;}

  small {font-size: 0.8em;}
`;

export default GlobalStyle;
