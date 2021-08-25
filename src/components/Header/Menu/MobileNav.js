import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "utils/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  transform: translateY(-100%);
  z-index: 300;

  position: fixed;
  left: 0;
  top: 0;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateY(0);
  `}
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  padding: 80px 0 16px;
  overflow: auto;

  ::after {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 16px;
    bottom: 0;
    left: 0;

    background: linear-gradient(0deg, ${colors.white} 50%, transparent 100%);
  }
`;

const BarOverlay = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, ${colors.white} 85%, transparent 95%);

  z-index: 301;
`;

const MobileNav = ({ isOpen, children }) => (
  <Wrapper isOpen={isOpen}>
    <BarOverlay />
    <StyledNav>{children}</StyledNav>
  </Wrapper>
);

MobileNav.defaultProps = {
  isOpen: false,
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
};

export default MobileNav;
