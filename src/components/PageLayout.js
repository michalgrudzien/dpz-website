import React from "react";
import PropTypes from "prop-types";

import UnderConstruction from "components/UnderConstruction";
import Header from "components/Header";
import Footer from "components/Footer";
import CookiesModal from "components/CookiesModal";

import GlobalStyle from "utils/GlobalStyle";

/**
 * Page layout component including constant
 * website elements such as header, footer, widgets,
 * cookie consent etc.
 */
const PageLayout = ({
  children,
  colorTheme,
  isUnderConstruction,
  withCookiesModal,
}) => {
  if (isUnderConstruction) return <UnderConstruction />;

  return (
    <>
      <GlobalStyle />
      <Header colorTheme={colorTheme} />
      {children}
      <Footer />
      <CookiesModal enabledOnPage={withCookiesModal} />
    </>
  );
};

PageLayout.defaultProps = {
  children: null,
  colorTheme: "dark",
  isUnderConstruction: false,
  withCookiesModal: true,
};

PageLayout.propTypes = {
  children: PropTypes.node,
  colorTheme: PropTypes.oneOf(["light", "dark"]),
  isUnderConstruction: PropTypes.bool,
  withCookiesModal: PropTypes.bool,
};

export default PageLayout;
