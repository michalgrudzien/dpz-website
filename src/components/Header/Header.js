import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useWindowSize from "hooks/useWindowSize";

import {
  StyledHeadroom,
  HeaderContainer,
  HeaderContentWrapper,
} from "./partials";
import Logo from "./Logo";
import Menu from "./Menu";

const MOBILE_BREAKPOINT = 768;

/**
 * Page Header component containing menu and logo.
 * Using react-headroom for automatic hiding on scroll.
 * Two color themes controlled by 'colorTheme' prop.
 */
const Header = ({ colorTheme }) => {
  const [isTop, setTop] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth] = useWindowSize();

  const isOnMobile = windowWidth < MOBILE_BREAKPOINT;
  useEffect(() => setMenuOpen(false), [isOnMobile]);

  const getColorTheme = (colorTheme, isTop, isMenuOpen) =>
    isMenuOpen && isOnMobile ? "dark" : isTop ? colorTheme : "dark";
  const getShrinked = (isTop, isMenuOpen) =>
    !isTop || (isMenuOpen && isOnMobile);

  const computedColorTheme = getColorTheme(colorTheme, isTop, isMenuOpen);
  const computedShrinked = getShrinked(isTop, isMenuOpen);

  return (
    <StyledHeadroom
      onPin={() => setTop(false)}
      onUnfix={() => setTop(true)}
      disable={isMenuOpen}
      isShrinked={computedShrinked}
      isMenuOpen={isMenuOpen}
    >
      <HeaderContainer>
        <HeaderContentWrapper isShrinked={computedShrinked}>
          <Logo colorTheme={computedColorTheme} isShrinked={computedShrinked} />
          <Menu
            colorTheme={computedColorTheme}
            isShrinked={computedShrinked}
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
          />
        </HeaderContentWrapper>
      </HeaderContainer>
    </StyledHeadroom>
  );
};

Header.defaultProps = {
  colorTheme: "dark",
};

Header.propTypes = {
  colorTheme: PropTypes.oneOf(["light", "dark"]),
};

export default Header;
