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
`;

export const Number = styled.div`
  color: ${colors.turquoise};
  font-weight: bold;
  font-size: 65px;
  font-family: 'Bebas Neue Bold', sans-serif
`;

export const Content = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.darkBlue};
  font-family: 'Bebas Neue Bold', sans-serif
`;

export const StyledContent = styled.div`
  color: inherit;
  font-size: 9px;
  font-family: 'Poppins', sans-serif;
`;