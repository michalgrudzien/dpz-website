import styled from "styled-components";
import colors from "settings/colors";
import { Link } from "gatsby";
import Section from "shared/Section";
import CircleItem from "shared/CircleItem";
import { ContentText } from "shared/Typography";

export const StyledSection = styled(Section)`
  background: ${colors.darkBlue};
  padding-top: 150px;
  
  @media screen and (min-width: 992px) {
    padding: 200px 0; 
  }
`;

export const List = styled.div``;

export const ListItem = styled.div`
  display: flex;
  flex-flow: row;
  margin: 10px 0;
  align-items: center;
  
  @media screen and (min-width: 992px) {
    font-size: 28px;
    width: 50%;
  }
`;

export const StyledLink = styled(Link)`
  color:${colors.white};
  text-decoration: none;
  margin: 25px 0;
  display: block;
  max-width: 345px;
  
  &:hover { 
    text-decoration: none
  }
`;

export const Content = styled(ContentText)`
  color: ${colors.white};
  font-size: 14px;
  line-height: 21px;
`;

export const Icon = styled.img`
   height: 32px;
   margin-right: 10px;
`;

export const CircleItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const StyledCircleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  width: fit-content;
  margin: 0 20px 20px 20px;
`;

export const StyledCircleItem = styled(CircleItem)`
  background: ${colors.graphite};
  color: ${colors.white};
  text-align: center;
  
  @media screen and (min-width: 992px) {
    height: 392px;
    width: 392px;  
  }
`;