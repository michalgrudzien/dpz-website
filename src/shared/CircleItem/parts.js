import styled from "styled-components";
import colors from "settings/colors";

export const Wrapper = styled.div`
  border-radius: 50%;
  background: ${colors.lightTurquoise};
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  
  &:hover {
    transform: scale(1.05w);
    transition: transform .3s ease;
  }
`;

export const Number = styled.div`
  color: ${colors.turquoise};
`;

export const Icon = styled.div`
  height: 20px;
  color: ${colors.white};
`;

export const Content = styled.div``;