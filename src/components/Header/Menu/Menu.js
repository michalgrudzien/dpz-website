import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "settings/colors";

const Menu = styled.nav`
  font-family: "Bebas Neue Book", sans-serif;
  padding-top: 4px;

  li a {
    ${({ colorTheme }) => {
      switch (colorTheme) {
        case "light":
          return `color: ${colors.white}`;
        default:
          return `color: ${colors.secondary}`;
      }
    }}
  }
`;

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
