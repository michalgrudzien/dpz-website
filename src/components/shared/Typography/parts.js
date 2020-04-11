import styled from "styled-components";
import colors from "utils/colors";

export const Title = styled.h2`
  color: ${colors.darkBlue};
  font-weight: bold;
  font-size: 59px;

  @media screen and (min-width: 992px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 162px;
  }
`;

export const Subtitle = styled.h3`
  color: ${props => (props.white ? colors.white : colors.turquoise)};
  font-weight: bold;
  font-size: 40px;
  margin: 10px 0;

  @media screen and (min-width: 992px) {
    font-size: 86px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 113px;
    margin-bottom: 30px;
  }
`;

export const ContentText = styled.p`
  color: ${props => (props.white ? colors.white : colors.darkGrey)};
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 1.8;

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 28px;
    line-height: 42px;
  }
`;