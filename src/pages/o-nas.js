import React from "react";
import { Reset } from "styled-reset";
import GlobalStyle from "settings/GlobalStyle";
import PageLayout from "components/PageLayout";
import InfoSection from "../components/AboutUs/InfoSection/InfoSection";
import StatuteSection from "../components/AboutUs/StatuteSection/StatuteSection";


const AboutUsPage = () => (
  <>
    <Reset />
    <GlobalStyle />
    <PageLayout colorTheme="light">
      <InfoSection />
      <StatuteSection/>
    </PageLayout>
  </>
);

export default AboutUsPage;
