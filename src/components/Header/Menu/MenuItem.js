import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Submenu from "./Submenu";
import colors from "settings/colors";

const listItemCommonStyles = css`
  position: relative;
  font-family: "Bebas Neue Book", sans-serif;
  padding-top: 4px;

  &:hover > a {
    color: ${colors.primary};
  }

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

const StyledListItem = styled.li`
  ${listItemCommonStyles};
  display: inline-block;
  margin-left: 1.5em;
  padding-bottom: 1em;
  top: 0.5em;
`;

const StyledSubmenuListItem = styled.li`
  ${listItemCommonStyles};
  display: block;
  text-align: right;
`;

const MenuLink = styled(Link)`
  ${({ hasSubmenu, isSubmenuOpen }) =>
    hasSubmenu &&
    `&::after {
    display: inline-block;
    content: "▾";
    font-size: 0.5em;
    position: relative;
    top: 1px;
    left: 1px;
    transition: all 250ms ease-out;

    ${isSubmenuOpen && `transform: rotate(180deg);`}
  }`}
`;

//TODO: implement using anchors, add default props
const MenuItem = ({
  children,
  label,
  linkTo,
  submenu,
  colorTheme,
  isShrinked,
  ...linkAttrs
}) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const hasSubmenu = submenu.length > 0;

  return (
    <StyledListItem
      colorTheme={colorTheme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MenuLink
        to={linkTo}
        isSubmenuOpen={isHovered && hasSubmenu}
        hasSubmenu={hasSubmenu}
        {...linkAttrs}
      >
        {label}
      </MenuLink>
      {hasSubmenu && (
        <Submenu
          isOpen={isHovered}
          colorTheme={colorTheme}
          isShrinked={isShrinked}
        >
          {submenu.map(item => (
            <StyledSubmenuListItem colorTheme={colorTheme}>
              <Link to={item.linkTo}>{item.label}</Link>
            </StyledSubmenuListItem>
          ))}
        </Submenu>
      )}
    </StyledListItem>
  );
};

MenuItem.defaultProps = {
  submenu: [],
};

MenuItem.propTypes = {
  children: PropTypes.array,
  label: PropTypes.string,
  linkTo: PropTypes.string,
  colorTheme: PropTypes.string,
  submenu: PropTypes.array,
  linkAttrs: PropTypes.any,
};

export default MenuItem;
