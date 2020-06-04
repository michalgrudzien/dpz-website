import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import PhotoHero from "components/shared/PhotoHero";
import Card, { CardSidePadding } from "components/shared/Card";
import TourShowcase from "components/Tours/TourShowcase";

import colors from "utils/colors";

import mockImg from "assets/images/brand_photo.jpg";
import logoImg from "assets/images/dpz_world_tour_logo.svg";

const imagesQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "world_tour_hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutTour = styled.section`
  padding-top: 6em;
  padding-bottom: 2em;

  ${media.md`
    padding-top: 10em;
    padding-bottom: 4em;
  `}
`;

const AboutTitle = styled.h1`
  color: ${colors.primary};
`;

const LogoImg = styled.img`
  max-width: 66%;
  margin: 2em auto;
  display: block;

  ${media.md`
    max-width: 50%;
  `}
`;

const WorldTour = () => {
  const images = useStaticQuery(imagesQuery);

  return (
    <PageLayout colorTheme="light">
      <PhotoHero
        fluidImage={images.heroImage.childImageSharp.fluid}
        backgroundPosition="10%"
        overlayOpacity="0.25"
        title="DPŻ World Tour"
        anchor={{
          label: "Dowiedz się więcej",
          scrollTo: "#o-rejsie",
        }}
      />
      <AboutTour id="o-rejsie">
        <Container>
          <CardSidePadding>
            <AboutTitle>Na na na na Mazury spoko</AboutTitle>
          </CardSidePadding>
          <Card>
            <Container fluid>
              <Row alignItems="center">
                <Col noGutter col={12} md={6} mdOrder="last">
                  <LogoImg src={logoImg} alt="DPŻ World Tour" />
                </Col>
                <Col noGutter col={12} md={6}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </p>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </AboutTour>
      <TourShowcase
        year="2019"
        gallery={[mockImg, mockImg, mockImg]}
        youtubeId="scOuCXapnm4"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </TourShowcase>
      <TourShowcase
        year="2018"
        gallery={[mockImg, mockImg, mockImg]}
        youtubeId="scOuCXapnm4"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </TourShowcase>
      <TourShowcase
        year="2017"
        gallery={[mockImg, mockImg, mockImg]}
        youtubeId="scOuCXapnm4"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </TourShowcase>
      <TourShowcase
        year="2016"
        gallery={[mockImg, mockImg, mockImg]}
        youtubeId="scOuCXapnm4"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </TourShowcase>
    </PageLayout>
  );
};

export default WorldTour;
