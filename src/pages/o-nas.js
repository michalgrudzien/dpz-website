import React from "react";
import { graphql } from "gatsby";

import PageLayout from "components/PageLayout";
import HeroSection from "components/AboutUs/HeroSection";
import StatuteSection from "components/AboutUs/StatuteSection";
import LogoSection from "components/AboutUs/LogoSection";

const AboutUsPage = ({ data }) => (
  <PageLayout colorTheme="dark" seoProps={data.allSanityAboutUs.nodes[0].seo}>
    <HeroSection />
    <LogoSection />
  </PageLayout>
);

export default AboutUsPage;

export const pageQuery = graphql`
  query AboutUsQuery {
    allSanityAboutUs {
      nodes {
        seo {
          title
          description
          image {
            asset {
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
