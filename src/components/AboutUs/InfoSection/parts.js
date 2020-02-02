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
`;

export const StyledCard = styled(Card)`
  margin-bottom: -150px;
  
  @media screen and (min-width: 992px) {
    margin-bottom: -250px;
  }
`;

export const StyledContentText = styled(ContentText)``;