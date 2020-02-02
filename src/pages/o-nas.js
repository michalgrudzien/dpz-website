import React from "react";
import { Reset } from "styled-reset";
import { BaseCSS } from "styled-bootstrap-grid";
import GlobalStyle from "settings/GlobalStyle";
import PageLayout from "components/PageLayout";
import { GridThemeProvider } from "styled-bootstrap-grid";
import InfoSection from "components/AboutUs/InfoSection";
import StatuteSection from "components/AboutUs/StatuteSection";

const gridTheme = {
  breakpoints: { // defaults below
    giant: 1920,
  },
  container: {
    maxWidth: {
      giant: 1640,
    },
  },
};

const AboutUsPage = () => (
  <>
    <Reset />
    <BaseCSS />
    <GlobalStyle />
    <GridThemeProvider
      gridTheme={gridTheme}
    >
      <PageLayout colorTheme="light">
        <InfoSection />
        <StatuteSection />
      </PageLayout>
    </GridThemeProvider>
  </>
);

export default AboutUsPage;
