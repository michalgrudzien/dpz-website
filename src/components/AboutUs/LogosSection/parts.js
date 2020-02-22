import styled from "styled-components";
import { ContentText } from "../../../shared/Typography";

export const Img = styled.img``;
export const Wrapper = styled.div`
  margin: 30px 0;
`;

export const Logos = styled(Img)`
  margin: 0 auto;
  display: block;
`;

export const StyledContentText = styled(ContentText)`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;

export const ColorsWrapper = styled(Wrapper)`
  &:first-child {
    margin-right: 0;
  }
`;

export const ColorImg = styled(Img)`
  margin: 0 30px;
`;

export const FontImg = styled(Img)`
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 50px 0;
  margin: 30px 0;
`;

export const FooterContentText = styled(ContentText)`
  text-align: left;
`;