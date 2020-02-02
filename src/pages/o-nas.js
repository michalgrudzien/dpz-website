import React from "react";
import { Reset } from "styled-reset";
import { BaseCSS } from 'styled-bootstrap-grid';
import GlobalStyle from "settings/GlobalStyle";
import PageLayout from "components/PageLayout";
import InfoSection from "components/AboutUs/InfoSection";
import StatuteSection from "components/AboutUs/StatuteSection";


const AboutUsPage = () => (
  <>
    <Reset />
    <BaseCSS />
    <GlobalStyle />
    <PageLayout colorTheme="light">
      <InfoSection />
      <StatuteSection/>
    </PageLayout>
  </>
);

export default AboutUsPage;
