import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import Submenu from "./Submenu";
import colors from "settings/colors";

const StyledListItem = styled.li`
  display: inline-block;
  margin-left: 1em;

  font-family: "Bebas Neue Book", sans-serif;
  padding-top: 4px;

  a {
    text-decoration: none;
    font-size: 1.2em;
    transition: color 100ms ease-out;
    &:hover {
      color: ${colors.primary};
    }

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

//TODO: implement using anchors, add default props
const MenuItem = ({ children, label, linkTo, colorTheme, ...linkAttrs }) => (
  <StyledListItem colorTheme={colorTheme}>
    <Link to={linkTo}>{label}</Link>
    {children && <Submenu>{children}</Submenu>}
  </StyledListItem>
);

MenuItem.propTypes = {
  children: PropTypes.array,
  label: PropTypes.string,
  linkTo: PropTypes.string,
  colorTheme: PropTypes.string,
  linkAttrs: PropTypes.any,
};

export default MenuItem;
