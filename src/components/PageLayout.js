import React from "react";
import PropTypes from "prop-types";

import UnderConstruction from "components/UnderConstruction";
import Header from "components/Header";

/**
 * Page layout component including constant
 * website elements such as header, footer, widgets,
 * cookie consent etc.
 */
const PageLayout = ({ children, colorTheme, isUnderConstruction }) => {
  if (isUnderConstruction) return <UnderConstruction />;

  return (
    <>
      <Header colorTheme={colorTheme} />
      {children}
      <div>FOOTER</div>
    </>
  );
};

PageLayout.defaultProps = {
  children: null,
  colorTheme: "dark",
  isUnderConstruction: false,
};

PageLayout.propTypes = {
  children: PropTypes.object,
  colorTheme: PropTypes.oneOf(["light", "dark"]),
  isUnderConstruction: PropTypes.bool,
};

export default PageLayout;
