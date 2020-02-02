import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

//TODO: why !important for font-family needed?
const GlobalStyle = createGlobalStyle`
  
  ${fonts}
  
  html, body {
    font-family: 'Raleway', sans-serif !important;  
    color: ${colors.default};
    font-size: 16px;
    height: 100%;
    background-color: #ddd;
  }

  h1,h2,h3,h4,h5,h6{
      font-family: 'Bebas Neue Bold', sans-serif;
  }
`;

export default GlobalStyle;
