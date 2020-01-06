import styled from "styled-components";
import colors from "settings/colors";

export const Wrapper = styled.div`
  padding: 50px 0; 
  background: ${colors.white};
  
  @media screen and (min-width: 992px) {
    padding: 100px 0; 
  }
`;
