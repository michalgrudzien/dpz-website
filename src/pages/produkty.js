import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import BrandCard from "components/Products/BrandCard";
import PhotoHero from "components/shared/PhotoHero";
import colors from "utils/colors";

import nosDpzLogoImg from "assets/images/nos_dpz_logo.svg";
import spozycieLogoImg from "assets/images/dpz_spozycie_logo.svg";
import Button from "components/shared/Button";

const BrandsSection = styled.section`
  padding-top: 6em;

  ${media.md`
    padding-top: 10em;
  `}
`;

const ShopTeaser = styled.div`
  background: ${colors.gradient};
  color: ${colors.white};
  position: relative;
  bottom: -64px;
  padding: 4em 0 92px 0;

  h1 {
    color: ${colors.white};
  }
`;

const ShopButton = styled(Button)`
  margin-top: 2em;
  width: 100%;

  ${media.md`
    float: right;
    width: auto;
  `}
`;

const imagesQuery = graphql`
  query {
    heroImage: file(relativePath: { eq: "products_hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ProductsPage = () => {
  const images = useStaticQuery(imagesQuery);

  return (
    <PageLayout colorTheme="light">
      <PhotoHero
        fluidImage={images.heroImage.childImageSharp.fluid}
        backgroundPosition="90%"
        overlayOpacity="0.25"
        title="Produkty Depeżetu"
        anchor={{
          label: "Nasze marki",
          scrollTo: "#marki",
        }}
      />
      <BrandsSection id="marki">
        <BrandCard
          title="Ciuchy letnie i takie na Mazury jesienią"
          logo={nosDpzLogoImg}
          youtubeId="KAJBFHLXaVc"
          alt="Noś DPŻ"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </BrandCard>
        <BrandCard
          title="Gadżety i akcesoria, ale nie smycze i długopisy"
          logo={spozycieLogoImg}
          youtubeId="9tZrYIhn8DE"
          alt="DPŻ Spożycie"
          flip
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </BrandCard>
      </BrandsSection>
      <ShopTeaser>
        <Container>
          <Row>
            <Col md="8">
              <h1>Podoba się? No to zamów!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </Col>
            <Col md="12">
              <ShopButton>Przejdź do zamawialni</ShopButton>
            </Col>
          </Row>
        </Container>
      </ShopTeaser>
    </PageLayout>
  );
};

export default ProductsPage;
