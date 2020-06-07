import React from "react";
import styled, { keyframes } from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

import colors from "utils/colors";

import arrowDownImg from "assets/images/arrow_down.svg";

const animation = keyframes`0%{transform:translateY(0)}100%{transform:translateY(8px)}`;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  align-items: ${({ align }) => align};
  cursor: pointer;
`;

const Label = styled.span`
  display: inline-block;
  color: ${colors.white};
  font-family: "Bebas Neue Regular", sans-serif;
  font-size: 1.2em;
  margin-bottom: 0.5em;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
`;

const ArrowImg = styled.img`
  width: 32px;
  height: 32px;

  animation: ${animation} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite
    alternate both;
`;

const ScrollAnchor = ({ scrollTo: scrollToParam, label, align, className }) => (
  <Wrapper
    className={className}
    align={align}
    onClick={() => scrollTo(scrollToParam)}
  >
    <Label>{label}</Label>
    <ArrowImg src={arrowDownImg} alt="Przejdź dalej" />
  </Wrapper>
);

ScrollAnchor.defaultProps = {
  align: "start",
  scrollTo: "#",
};

export default ScrollAnchor;
