import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "settings/colors";

const MenuButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  .dash {
    width: 32px;
    height: 2px;
    transition: transform 250ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transform-origin: 50%;
    position: relative;
  }

  .top-dash {
    top: -5px;
  }

  .bottom-dash {
    background-color: ${colors.turquoise};
    top: 5px;
  }

  .top-dash,
  .middle-dash {
    ${({ colorTheme }) =>
      colorTheme === "light"
        ? `
        background-color: ${colors.white};
    `
        : `
        background-color: ${colors.darkBlue};
    `}
  }

  ${({ isOpen }) =>
    isOpen
      ? `
    .top-dash {
        transform: translateY(7px) rotate(-135deg);
    }
    .middle-dash {
        transform: scaleX(0);
    }
    .bottom-dash {
        transform: translateY(-7px) rotate(135deg);
    }
  `
      : ``}
`;

const MobileNavToggle = props => (
  <MenuButton {...props}>
    <div className="dash top-dash" />
    <div className="dash middle-dash" />
    <div className="dash bottom-dash" />
  </MenuButton>
);

MobileNavToggle.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  colorTheme: PropTypes.oneOf(["light", "dark"]),
};

export default MobileNavToggle;
