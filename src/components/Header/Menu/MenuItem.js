import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Submenu } from "components/Header/Menu";
import colors from "settings/colors";

const StyledListItem = styled.li`
  display: inline-block;
  margin-left: 1em;

  a {
    text-decoration: none;
    font-size: 1.44em;
    transition: color 100ms ease-out;
    &:hover {
      color: ${colors.primary};
    }
  }
`;

//TODO: implement using anchors
const MenuItem = ({ children, label, linkTo, ...linkAttrs }) => (
  <StyledListItem>
    <Link to={linkTo}>{label}</Link>
    {children && <Submenu>{children}</Submenu>}
  </StyledListItem>
);

export default MenuItem;
