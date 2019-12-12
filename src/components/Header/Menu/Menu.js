import React from "react";
import PropTypes from "prop-types";

import MenuItem from "./MenuItem";
import structure from "settings/menu.json";

const Menu = ({ colorTheme, isShrinked }) => (
  <nav>
    {structure.map(item => (
      <MenuItem
        label={item.label}
        linkTo={item.linkTo}
        submenu={item.submenu}
        colorTheme={colorTheme}
        isShrinked={isShrinked}
      />
    ))}
  </nav>
);

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
