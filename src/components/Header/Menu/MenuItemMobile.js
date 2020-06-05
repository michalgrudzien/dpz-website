import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import colors from "utils/colors";

const StyledListItem = styled.li`
  display: block;
  text-align: center;
  font-family: "Bebas Neue Book", sans-serif;
  font-size: 2rem;
  margin-bottom: 3rem;

  ${({ hasSubmenu }) =>
    hasSubmenu && `font-size: 1.5rem; color: ${colors.secondary};`}
`;

const linkStyles = css`
  color: ${colors.secondary};
  text-decoration: none;

  transition: color 100ms ease-out;

  &:hover,
  &.is-active {
    color: ${colors.primary};
  }

  &.is-active {
    font-family: "Bebas Neue Bold", sans-serif;
  }
`;

const StyledLink = styled(Link)`
  ${linkStyles}
`;

const ClickLink = styled.a`
  ${linkStyles};
  cursor: pointer;
`;

const SubmenuList = styled.ul`
  margin-top: 12px;

  ${StyledListItem} {
    margin-bottom: 1rem;
  }
`;

const MenuItemMobile = ({ label, linkTo, onClick, isClickLink, submenu }) => {
  const hasSubmenu = submenu.length > 0;
  return (
    <StyledListItem hasSubmenu={hasSubmenu}>
      {!hasSubmenu && (
        <>
          {isClickLink ? (
            <ClickLink onClick={onClick}>{label}</ClickLink>
          ) : (
            <StyledLink to={linkTo} activeClassName="is-active">
              {label}
            </StyledLink>
          )}
        </>
      )}
      {hasSubmenu && label}
      {hasSubmenu && (
        <SubmenuList>
          {submenu.map((item, index) => (
            <StyledListItem key={index}>
              {isClickLink ? (
                <ClickLink onClick={onClick}>{label}</ClickLink>
              ) : (
                <StyledLink to={item.linkTo} activeClassName="is-active">
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
