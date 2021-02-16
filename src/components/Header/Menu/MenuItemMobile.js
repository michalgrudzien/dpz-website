import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import colors from "utils/colors";

const StyledListItem = styled.li`
  display: block;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.35rem;

  margin-bottom: 0;
  padding-left: 1rem;

  ${({ hasSubmenu }) =>
    hasSubmenu && `font-size: 1.25rem; color: ${colors.secondary};`}
`;

const linkStyles = css`
  display: block;
  color: ${colors.secondary};
  border-radius: 5px;
  text-decoration: none;

  margin: 0 1rem 0.5rem 0;
  padding: 0.65rem 1rem 0.35rem 1rem;

  transition: color 100ms ease-out;

  &:hover,
  &.is-active {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const ClickLink = styled.a`
  ${linkStyles};
  cursor: pointer;
`;

const SubmenuList = styled.ul``;

const SubmenuLabel = styled.span`
  display: block;
  padding: 0.65rem 1rem 0.5rem 0;
  margin: 0 1rem 0.5rem 0;
  color: ${colors.darkGrey};
  font-size: 0.85em;
`;

const MenuItemMobile = ({
  label,
  linkTo,
  exact,
  onClick,
  isClickLink,
  submenu,
}) => {
  const hasSubmenu = submenu.length > 0;
  return (
    <StyledListItem hasSubmenu={hasSubmenu}>
      {!hasSubmenu && (
        <>
          {isClickLink ? (
            <ClickLink onClick={onClick}>{label}</ClickLink>
          ) : (
            <StyledLink
              to={linkTo}
              activeClassName="is-active"
              partiallyActive={!exact}
            >
              {label}
            </StyledLink>
          )}
        </>
      )}
      {hasSubmenu && (
        <StyledListItem>
          <SubmenuLabel>{label}</SubmenuLabel>
        </StyledListItem>
      )}
      {hasSubmenu && (
        <SubmenuList>
          {submenu.map((item, index) => (
            <StyledListItem key={index}>
              {isClickLink ? (
                <ClickLink onClick={onClick}>{label}</ClickLink>
              ) : (
                <StyledLink
                  to={item.linkTo}
                  activeClassName="is-active"
                  partiallyActive={!item.exact}
                >
                  {item.label}
                </StyledLink>
              )}
            </StyledListItem>
          ))}
        </SubmenuList>
      )}
    </StyledListItem>
  );
};

MenuItemMobile.defaultProps = {
  submenu: [],
};

MenuItemMobile.propTypes = {
  label: PropTypes.string,
  linkTo: PropTypes.string,
  submenu: PropTypes.array,
};

export default MenuItemMobile;
