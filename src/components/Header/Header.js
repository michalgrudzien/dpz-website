import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  StyledHeadroom,
  HeaderContainer,
  HeaderContentWrapper,
} from "./partials";
import Logo from "./Logo";
import Menu from "./Menu";

/**
 * Page Header component containing menu and logo.
 * Using react-headroom for automatic hiding on scroll.
 * Two color themes controlled by 'colorTheme' prop.
 */
const Header = ({ colorTheme }) => {
  const [isTop, setTop] = useState(true);

  const getColorTheme = (colorTheme, isTop) => (isTop ? colorTheme : "dark");
  const computedColorTheme = getColorTheme(colorTheme, isTop);

  return (
    <StyledHeadroom
      onPin={() => setTop(false)}
      onUnfix={() => setTop(true)}
      isShrinked={!isTop}
    >
      <HeaderContainer>
        <HeaderContentWrapper isShrinked={!isTop}>
          <Logo colorTheme={computedColorTheme} isShrinked={!isTop} />
          <Menu colorTheme={computedColorTheme} isShrinked={!isTop} />
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
