import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "settings/colors";

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  padding: 80px 0 32px;
  overflow: hidden;
  z-index: 300;

  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translateY(0);
  `}
`;

const MobileNav = ({ isOpen, children }) => (
  <StyledNav isOpen={isOpen}>{children}</StyledNav>
);

MobileNav.defaultProps = {
  isOpen: false,
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
};

export default MobileNav;
