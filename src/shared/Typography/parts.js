import styled from "styled-components";
import colors from "settings/colors";

export const Title = styled.h2`
  color: ${colors.darkBlue};
  font-weight: bold;
  font-size: 59px;
`;

export const Subtitle = styled.h3`
  color: ${props => props.white ? colors.white : colors.turquoise};
  font-weight: bold;
  font-size: 40px;
  margin: 10px 0;
`;

export const ContentText = styled.p`
  color: ${props => props.white ? colors.white : colors.darkGrey};
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 2;
`;