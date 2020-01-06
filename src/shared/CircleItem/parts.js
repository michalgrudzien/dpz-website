import styled from "styled-components";
import colors from "settings/colors";

export const Icon = styled.div`
  height: 30px;
  width: 26px;
  color: ${colors.white};
  margin-bottom: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${props => `url(${props.icon})`};
  transition: all .3s ease-in-out;
  
  @media screen and (min-width: 992px) {
    height: 80px;
    width: 68px;  
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  border-radius: 50%;
  background: ${colors.lightTurquoise};
  height: 140px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  transition: all .3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    transition: all .3s ease-in-out;
    
    > ${Icon} {
      background-image: ${props => `url(${props.activeIcon})`};
      transition: all .3s ease-in-out;
    }
  }
  
  @media screen and (min-width: 992px) {
    height: 267px;
    width: 267px;
  }
`;

export const Number = styled.div`
  color: ${colors.turquoise};
  font-weight: bold;
  font-size: 65px;
  font-family: 'Bebas Neue Bold', sans-serif;
  
  @media screen and (min-width: 992px){
    font-size: 113px;
  }
`;

export const Content = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.darkBlue};
  font-family: 'Bebas Neue Bold', sans-serif;
  
  @media screen and (min-width: 992px) {
    font-size: 28px;
  }
`;

export const StyledContent = styled.div`
  color: inherit;
  font-size: 9px;
  font-family: 'Poppins', sans-serif;
  
  @media screen and (min-width: 992px) {
    font-size: 28px;
  }
`;