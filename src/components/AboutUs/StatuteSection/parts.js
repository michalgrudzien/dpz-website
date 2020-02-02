import styled from "styled-components";
import colors from "settings/colors";
import { Link } from "gatsby";
import Section from "shared/Section";
import CircleItem from "shared/CircleItem";
import { ContentText, Subtitle } from "shared/Typography";

export const StyledSection = styled(Section)`
  background: ${colors.darkBlue};
  padding-top: 150px;
  
  @media screen and (min-width: 992px) {
    padding: 200px 0; 
  }
  
  @media screen and (min-width: 1920px) {
    padding: 350px 0 200px 0; 
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
    margin: 20px 0;
  }
  
  @media screen and (min-width: 1440px) {
    margin: 40px 0;
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
  
  @media screen and (min-width: 992px) {
    max-width: 100%;
  }  
  
  @media screen and (min-width: 1920px) {
    max-width: 95%;
  }
`;

export const Content = styled(ContentText)`
  color: ${colors.white};
  font-size: 14px;
  line-height: 21px;
  
  @media screen and (min-width: 992px) {
    font-size: 20px;
    line-height: 32px;
  }  
  
  @media screen and (min-width: 1920px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const Icon = styled.img`
   height: 32px;
   margin-right: 10px;
   
   @media screen and (min-width: 992px) {
     height: 60px;
     margin-right: 20px;
   }
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
    height: 250px;
    width: 250px;  
  }  
  
  @media screen and (min-width: 1920px) {
    height: 392px;
    width: 392px;  
  }
`;

export const StyledSubtitle = styled(Subtitle)`

  @media screen and (min-width: 920px) {
    font-size: 60px;
    margin-top: 30px;
  }  
  
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
  
  @media screen and (min-width: 1920px) {
    font-size: 73px;
  }
`;