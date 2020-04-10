import React from "react";

import PageLayout from "components/PageLayout";
import InfoSection from "components/AboutUs/InfoSection";
import StatuteSection from "components/AboutUs/StatuteSection";
import LogosSection from "../components/AboutUs/LogosSection";

const AboutUsPage = () => (
  <PageLayout colorTheme="dark">
    <InfoSection />
    {/* <StatuteSection />
    <LogosSection /> */}
  </PageLayout>
);

export default AboutUsPage;
