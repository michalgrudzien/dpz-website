import React from "react";

import PageLayout from "components/PageLayout";
import HeroSection from "components/AboutUs/HeroSection";
import StatuteSection from "components/AboutUs/StatuteSection";

const AboutUsPage = () => (
  <PageLayout colorTheme="dark">
    <HeroSection />
    <StatuteSection />
  </PageLayout>
);

export default AboutUsPage;
