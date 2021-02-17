import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import UnderConstruction from "components/UnderConstruction";
import Header from "components/Header";
import Footer from "components/Footer";
import Contact from "components/Contact";
import CookiesModal from "components/CookiesModal";

import GlobalStyle from "utils/GlobalStyle";
import SEO from "components/SEO";
import WindowCheck from "components/WindowCheck";

export const ContactContext = createContext({
  isContactOpen: false,
  setContactOpen: () => {},
});

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
  seoProps,
}) => {
  const [isContactOpen, setContactOpen] = useState(false);
  if (isUnderConstruction) return <UnderConstruction />;

  return (
    <ContactContext.Provider value={{ isContactOpen, setContactOpen }}>
      <SEO {...seoProps} />
      <GlobalStyle isContactOpen={isContactOpen} />
      <Header colorTheme={colorTheme} />
      {children}
      <Footer />
      <Contact />
      <WindowCheck>
        <CookiesModal enabledOnPage={withCookiesModal} />
      </WindowCheck>
    </ContactContext.Provider>
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
