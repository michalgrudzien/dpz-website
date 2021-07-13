import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import PhotoHero from "components/shared/PhotoHero";
import Card, { CardSidePadding } from "components/shared/Card";
import TourShowcase from "components/Tours/TourShowcase";

import colors from "utils/colors";

import TourNumbers from "components/Tours/TourNumbers";
import BlockContent from "components/BlockContent";
import LinkButton from "components/shared/LinkButton";

const AboutTour = styled.section`
  padding-top: 6em;
  padding-bottom: 2em;

  ${media.md`
    padding-top: 10em;
    padding-bottom: 6em;
  `}
`;

const AboutTitle = styled.h1`
  color: ${colors.primary};
`;

const NumbersTitle = styled.h1`
  color: ${colors.primary};

  ${media.md`
    text-align: right;
  `}
`;

const LogoImg = styled.img`
  max-width: 66%;
  margin: 2em auto;
  display: block;

  ${media.md`
    max-width: 50%;
  `}
`;

const Tour = ({ data: { sanityTour: tour } }) => (
  <PageLayout colorTheme="light" seoProps={tour.seo}>
    <PhotoHero
      fluidImage={tour.heroPhoto.asset.fluid}
      overlayOpacity="0.25"
      title={tour.name}
      anchor={{
        label: "Dowiedz się więcej",
        scrollTo: "#o-rejsie",
      }}
    />
    <AboutTour id="o-rejsie">
      <Container>
        <CardSidePadding>
          <AboutTitle>{tour.title}</AboutTitle>
        </CardSidePadding>
        <Card>
          <Container fluid>
            <Row alignItems="center">
              <Col noGutter col={12} md={6} mdOrder="last">
                <LogoImg src={tour.logo.asset.url} alt={tour.name} />
              </Col>
              <Col noGutter col={12} md={6}>
                <BlockContent blocks={tour._rawBody} />
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </AboutTour>
    <Container>
      <Row>
        <Col>
          <CardSidePadding>
            <NumbersTitle>{tour.numbersTitle}</NumbersTitle>
          </CardSidePadding>
          <TourNumbers numbers={tour.numbers} />
        </Col>
      </Row>
    </Container>
    {tour.cruises.map((cruise) => (
      <TourShowcase
        year={cruise.year}
        gallery={cruise.gallery.map(
          (galleryItem) => galleryItem.asset.fluid.src
        )}
        youtubeId={cruise.youtubeUrl}
      >
        {cruise.summaryPostUrl && (
          <LinkButton internal to={cruise.summaryPostUrl}>
            Przeczytaj podsumowanie
          </LinkButton>
        )}
      </TourShowcase>
    ))}
  </PageLayout>
);

export default Tour;

export const pageQuery = graphql`
  query TourQuery($slug: String) {
    sanityTour(slug: { current: { eq: $slug } }) {
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
      slug {
        current
      }
      heroPhoto {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      name
      title
      _rawBody
      logo {
        asset {
          url
        }
      }
      numbersTitle
      numbers {
        number
        caption
      }
      cruises {
        _rawBody
        year
        youtubeUrl
        gallery {
          asset {
            fluid(maxWidth: 800) {
              src
            }
          }
        }
      }
    }
  }
`;
