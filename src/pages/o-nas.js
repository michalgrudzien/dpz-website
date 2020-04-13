import React from "react";

import PageLayout from "components/PageLayout";
import HeroSection from "components/AboutUs/HeroSection";
import StatuteSection from "components/AboutUs/StatuteSection";
import LogoSection from "components/AboutUs/LogoSection";

const AboutUsPage = () => (
  <PageLayout colorTheme="dark">
    <HeroSection />
    <StatuteSection />
    <LogoSection />
  </PageLayout>
);

export default AboutUsPage;
