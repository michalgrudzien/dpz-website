import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  
  ${fonts}
  
  html, body {
    font-family: 'Raleway', sans-serif !important;  
    background-color: black;
    color: ${colors.white};
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6{
      font-family: 'Bebas Neue Bold', sans-serif;
  }
`;

export default GlobalStyle;
