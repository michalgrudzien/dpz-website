import styled from "styled-components";
import colors from "settings/colors";

export const Title = styled.h1`
  color: ${colors.darkGrey};
`;

export const Subtitle = styled.h2`
  color: ${props => props.white ? colors.white : colors.turquoise};
`;

export const ContentText = styled.p`
  color: ${props => props.white ? colors.white : colors.darkGrey};
`;