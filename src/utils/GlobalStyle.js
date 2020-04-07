import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import fonts from "./fonts";

//TODO: Write global styles for :focus states, selection css
const GlobalStyle = createGlobalStyle`
  
  ${fonts}
  
  html, body {
    color: ${colors.default};
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export default GlobalStyle;
