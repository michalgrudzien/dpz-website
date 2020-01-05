import styled from "styled-components";
import CircleItem from "shared/CircleItem";
import Card from "shared/Card";
import { ContentText } from "../../../shared/Typography";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
 `;

export const CircleWrapper = styled.div`
  min-width: 200px;
`;

export const StyledCircleItem = styled(CircleItem)`
  margin: 10px;
`;

export const StyledCard = styled(Card)`
  min-height: 350px;
  margin-bottom: -150px;
`;

export const StyledContentText = styled(ContentText)`

`;