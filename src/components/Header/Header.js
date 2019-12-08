import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "styled-bootstrap-grid";

import { StyledHeadroom, HeaderContentWrapper } from "./partials";
import Logo from "./Logo";
import { Menu, MenuItem, Submenu } from "./Menu";

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
      <Container>
        <HeaderContentWrapper>
          <Logo colorTheme={computedColorTheme} isShrinked={!isTop} />
          <Menu colorTheme={computedColorTheme}>
            <MenuItem label="O nas" linkTo="/o-nas" />
            <MenuItem label="Rejsy" linkTo="/rejsy">
              {/* <MenuItem label="DPŻ World Tour" linkTo="/rejst/dpz-world-tour" />
              <MenuItem
                label="DPŻ We Shall Sea"
                linkTo="/rejst/dpz-we-shall-sea"
              /> */}
            </MenuItem>
          </Menu>
        </HeaderContentWrapper>
      </Container>
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
