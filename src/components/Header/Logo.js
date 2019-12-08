import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { Link } from "gatsby";

import logoWhite from "assets/images/dpz_logo_white.svg";
import logoBlue from "assets/images/dpz_logo_blue.svg";

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  transition: all 150ms ease-out;
  transform-origin: 50% 0;

  ${media.md`
    ${({ isShrinked }) => isShrinked && `transform: scale(0.625)`};
    width: 64px;
    height: 64px;
  `}
`;

/**
 * Logo component used in header.
 * Has two color variants depending on passed prop.
 * Links to root directory.
 */
const Logo = ({ colorTheme, isShrinked }) => (
  <Link to="/">
    <StyledImg
      src={colorTheme === "light" ? logoWhite : logoBlue}
      alt="Dobra Praktyka Żeglarska"
      isShrinked={isShrinked}
    />
  </Link>
);

Logo.defaultProps = {
  colorTheme: "dark",
  isShrinked: false,
};

Logo.propTypes = {
  colorTheme: PropTypes.oneOf(["light", "dark"]),
  isShrinked: PropTypes.bool,
};

export default Logo;
