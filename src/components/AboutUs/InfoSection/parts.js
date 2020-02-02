import styled from "styled-components";
import CircleItem from "shared/CircleItem";
import Card from "shared/Card";
import { ContentText } from "../../../shared/Typography";

export const HeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 30px;
 `;

export const StyledCircleItem = styled(CircleItem)`
  margin-left: auto;
  margin-top: 20px;
  
  @media screen and (min-width: 576px) {
    margin: 20px;
  }
  
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const StyledCard = styled(Card)`
  margin-bottom: -150px;
  
  @media screen and (min-width: 992px) {
    margin-bottom: -250px;
  }
  
  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
  
  @media screen and (min-width: 1920px) {
    padding: 65px;
    margin-bottom: -280px;
  }
`;

export const StyledContentText = styled(ContentText)``;