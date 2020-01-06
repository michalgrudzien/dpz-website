import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import Portal from "components/Portal";

import MenuItem from "./MenuItem";
import MobileNavToggle from "./MobileNavToggle";
import MobileNav from "./MobileNav";

import structure from "settings/menu.json";

const DesktopNav = styled.nav`
  display: none;
  ${media.md`
    display: block;
  `}
`;

const MobileNavWrapper = styled.div`
  display: block;
  ${media.md`
    display: none;
  `}
`;

const Menu = ({ isMenuOpen, setMenuOpen, colorTheme, isShrinked }) => {
  return (
    <>
      <DesktopNav>
        {structure.map(item => (
          <MenuItem
            label={item.label}
            linkTo={item.linkTo}
            submenu={item.submenu}
            colorTheme={colorTheme}
            isShrinked={isShrinked}
          />
        ))}
      </DesktopNav>
      <MobileNavWrapper>
        <MobileNavToggle
          isOpen={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
          colorTheme={colorTheme}
        />
        <Portal>
          <MobileNav isOpen={isMenuOpen}>Mobile Nav!</MobileNav>
        </Portal>
      </MobileNavWrapper>
    </>
  );
};

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
