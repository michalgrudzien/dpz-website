import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Submenu from "./Submenu";
import colors from "utils/colors";

const listItemCommonStyles = css`
  position: relative;
  font-family: "Bebas Neue", sans-serif;
  padding-top: 4px;

  &:hover > a {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2em;
    transition: color 100ms ease-out;
    &:hover {
      text-decoration: underline;
    }

    ${({ colorTheme }) => {
      switch (colorTheme) {
        case "light":
          return `
            color: ${colors.white};
            text-shadow: 0px 1px 3px rgba(0,0,0,0.35);`;
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

  a {
    text-shadow: none;
    color: ${colors.secondary};
  }
`;

const MenuLink = styled(Link)`
  &.is-active {
    text-decoration: underline;
  }

  white-space: nowrap;

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

const ClickLink = styled.a``;

//TODO: implement using anchors, add default props
const MenuItem = ({
  children,
  label,
  linkTo,
  exact,
  onClick,
  isClickLink,
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
      {isClickLink ? (
        <ClickLink onClick={onClick}>{label}</ClickLink>
      ) : (
        <MenuLink
          to={linkTo}
          isSubmenuOpen={isHovered && hasSubmenu}
          hasSubmenu={hasSubmenu}
          activeClassName="is-active"
          partiallyActive={!exact}
          {...linkAttrs}
        >
          {label}
        </MenuLink>
      )}
      {hasSubmenu && (
        <Submenu
          isOpen={isHovered}
          colorTheme={colorTheme}
          isShrinked={isShrinked}
        >
          {submenu.map((item, index) => (
            <StyledSubmenuListItem key={index} colorTheme={colorTheme}>
              <MenuLink
                to={item.linkTo}
                activeClassName="is-active"
                partiallyActive={!item.exact}
              >
                {item.label}
              </MenuLink>
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
