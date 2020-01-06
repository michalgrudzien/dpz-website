import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import MenuItem from "./MenuItem";
import MobileNavToggle from "./MobileNavToggle";
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

const Menu = ({ colorTheme, isShrinked }) => {
  const [isOpen, setMenuOpen] = useState(false);

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
          isOpen={isOpen}
          onClick={() => setMenuOpen(!isOpen)}
          colorTheme={colorTheme}
        />
      </MobileNavWrapper>
    </>
  );
};

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
