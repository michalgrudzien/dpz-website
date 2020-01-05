import styled from "styled-components";
import colors from "settings/colors";
import { Link } from "gatsby";
import Section from "shared/Section";
import CircleItem from "shared/CircleItem";

export const StyledSection = styled(Section)`
  background: ${colors.darkBlue};
  padding-top: 150px;
`;

export const List = styled.div``;

export const ListItem = styled.div`
  display: flex;
  flex-flow: row;
  margin: 10px 0;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color:${colors.white};
  text-decoration: none;
  margin: 25px 0;
  display: block;
  
  &:hover { 
    text-decoration: underline
  }
`;

export const Title = styled.div``;

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
  
  &:hover {
    color: ${colors.turquoise};
  }
`;