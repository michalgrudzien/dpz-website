import React from "react";
import { useStaticQuery } from "gatsby";

import PageLayout from "components/PageLayout";

import HomeHero from "components/Home/HomeHero";
import WhoWeAre from "components/Home/WhoWeAre";
import News from "components/Home/News";
import LatestTrip from "components/Home/LatestTrip";

const imagesQuery = graphql`
  query {
    heroImage1: file(relativePath: { eq: "home_hero_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImage2: file(relativePath: { eq: "home_hero_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = () => {
  const images = useStaticQuery(imagesQuery);

  const heroImages = [
    images.heroImage1.childImageSharp.fluid,
    images.heroImage2.childImageSharp.fluid,
  ];

  return (
    <PageLayout colorTheme="light">
      <HomeHero images={heroImages} />
      <WhoWeAre />
      <News />
      <LatestTrip />
    </PageLayout>
  );
};

export default IndexPage;
