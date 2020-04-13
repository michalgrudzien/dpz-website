import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "utils/colors";

const StyledListItem = styled.li`
  display: block;
  text-align: center;
  font-family: "Bebas Neue Book", sans-serif;
  font-size: 1.66rem;
  margin-bottom: 1.66rem;

  ${({ hasSubmenu }) =>
    hasSubmenu && `font-size: 1.2rem; color: ${colors.secondary}`}
`;

const StyledLink = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;

  transition: color 100ms ease-out;
  &:hover {
    color: ${colors.primary};
  }
`;

const SubmenuList = styled.ul`
  margin-top: 12px;

  ${StyledListItem} {
    margin-bottom: 0.32rem;
  }
`;

const MenuItemMobile = ({ label, linkTo, submenu }) => {
  const hasSubmenu = submenu.length > 0;

  return (
    <StyledListItem hasSubmenu={hasSubmenu}>
      {!hasSubmenu && <StyledLink to={linkTo}>{label}</StyledLink>}
      {hasSubmenu && label}
      {hasSubmenu && (
        <SubmenuList>
          {submenu.map((item, index) => (
            <StyledListItem key={index}>
              <StyledLink linkTo={item.linkTo}>{item.label}</StyledLink>
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
