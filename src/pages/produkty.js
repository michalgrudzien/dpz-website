import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import BrandCard from "components/Products/BrandCard";
import PhotoHero from "components/shared/PhotoHero";

import nosDpzLogoImg from "assets/images/nos_dpz_logo.svg";
import spozycieLogoImg from "assets/images/dpz_spozycie_logo.svg";

const BrandsSection = styled.section`
  padding-top: 6em;

  ${media.md`
    padding-top: 10em;
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
    </PageLayout>
  );
};

export default ProductsPage;
