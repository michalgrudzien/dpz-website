import React from "react";
import PropTypes from "prop-types";

import MenuItem from "./MenuItem";
import structure from "./menu.json";

const Menu = ({ colorTheme }) => (
  <nav>
    {structure.map(item => (
      <MenuItem
        label={item.label}
        linkTo={item.linkTo}
        colorTheme={colorTheme}
      />
    ))}
  </nav>
);

Menu.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["dark", "light"]),
};

export default Menu;
