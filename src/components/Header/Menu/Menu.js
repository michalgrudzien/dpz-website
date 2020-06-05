import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import Portal from "components/Portal";

import MenuItem from "./MenuItem";
import MobileNavToggle from "./MobileNavToggle";
import MobileNav from "./MobileNav";
import MenuItemMobile from "./MenuItemMobile";

import structure from "utils/menu.json";
import { ContactContext } from "components/PageLayout";

const DesktopNav = styled.nav`
  display: none;
  ${media.md`
    display: block;
  `}
`;

const MenuList = styled.ul`
  margin: 0;
`;

const MobileNavWrapper = styled.div`
  display: block;
  ${media.md`
    display: none;
  `}
`;

const getKey = item => `${item.label}_${item.linkTo}`;

const Menu = ({ isMenuOpen, setMenuOpen, colorTheme, isShrinked }) => {
  return (
    <ContactContext.Consumer>
      {({ setContactOpen }) => (
        <>
          <DesktopNav>
            <MenuList>
              {structure.map(item => (
                <MenuItem
                  key={getKey(item)}
                  label={item.label}
                  linkTo={item.linkTo}
                  submenu={item.submenu}
                  colorTheme={colorTheme}
                  isShrinked={isShrinked}
                />
              ))}
              <MenuItem
                onClick={() => setContactOpen(true)}
                label="Kontakt"
                colorTheme={colorTheme}
                isShrinked={isShrinked}
                isClickLink
              />
            </MenuList>
          </DesktopNav>
          <MobileNavWrapper>
            <MobileNavToggle
              isOpen={isMenuOpen}
              onClick={() => setMenuOpen(!isMenuOpen)}
              colorTheme={colorTheme}
            />
            <Portal>
              <MobileNav isOpen={isMenuOpen}>
                <MenuList>
                  {structure.map(item => (
                    <MenuItemMobile
                      key={getKey(item)}
                      label={item.label}
                      linkTo={item.linkTo}
                      submenu={item.submenu}
                    />
                  ))}
                  <MenuItemMobile
                    onClick={() => {
                      setContactOpen(true);
                      setMenuOpen(false);
                    }}
                    label="Kontakt"
                    isClickLink
                  />
                </MenuList>
              </MobileNav>
            </Portal>
          </MobileNavWrapper>
        </>
      )}
    </ContactContext.Consumer>
  );
};

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
