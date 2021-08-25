import React from "react";
import { graphql } from "gatsby";
import { ParallaxProvider } from "react-scroll-parallax";
import get from "lodash.get";

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
import Songbook from "components/Home/Songbook";
import Spotify from "components/Home/Spotify";

const MOBILE_BREAKPOINT = 768;

const IndexPage = ({ data: response }) => {
  const [windowWidth] = useWindowSize();

  const seo = get(response, "allSanityHomepage.nodes[0].seo", {});

  const isOnMobile = windowWidth < MOBILE_BREAKPOINT;

  return (
    <PageLayout colorTheme="light" seoProps={seo}>
      <ParallaxProvider>
        <HomeHero />
        <WhoWeAre />
        <News />
        <LatestTrip isOnMobile={isOnMobile} />
        <ProductsTeaser isOnMobile={isOnMobile} />
        <section id="dzialalnosc-klubu">
          <WhatWeDo isOnMobile={isOnMobile} />
        </section>
        <section id="dolacz-do-nas">
          <JoinUs />
        </section>
        <Tours />
        <Blog />
        <Instagram />
        <section id="spiewnik">
          <Songbook />
        </section>
        <Spotify />
      </ParallaxProvider>
    </PageLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allSanityHomepage {
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
