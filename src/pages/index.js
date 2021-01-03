import React from "react";
import { useStaticQuery } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";

import PageLayout from "components/PageLayout";

import HomeHero from "components/Home/HomeHero";
import WhoWeAre from "components/Home/WhoWeAre";
import News from "components/Home/News";
import LatestTrip from "components/Home/LatestTrip";
import ProductsTeaser from "components/Home/ProductsTeaser";
import WhatWeDo from "components/Home/WhatWeDo";
import JoinUs from "components/Home/JoinUs";
import useWindowSize from "hooks/useWindowSize";
import Tours from "components/Home/Tours";
import Blog from "components/Home/Blog";
import Instagram from "components/Home/Instagram";

const MOBILE_BREAKPOINT = 768;

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
  const [windowWidth] = useWindowSize();

  const isOnMobile = windowWidth < MOBILE_BREAKPOINT;

  const heroImages = [
    images.heroImage1.childImageSharp.fluid,
    images.heroImage2.childImageSharp.fluid,
  ];

  return (
    <PageLayout colorTheme="light">
      <ParallaxProvider>
        <HomeHero images={heroImages} />
        <WhoWeAre />
        <News />
        <LatestTrip isOnMobile={isOnMobile} />
        <ProductsTeaser isOnMobile={isOnMobile} />
        <WhatWeDo isOnMobile={isOnMobile} />
        <JoinUs />
        <Tours />
        <Blog />
        <Instagram />
      </ParallaxProvider>
    </PageLayout>
  );
};

export default IndexPage;
