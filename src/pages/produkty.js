import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import BrandCard from "components/Products/BrandCard";
import ShopTeaser from "components/Products/ShopTeaser";
import PhotoHero from "components/shared/PhotoHero";
import IfShopOpen from "components/IfShopOpen";

import get from "lodash.get";
import BlockContent from "components/BlockContent";

const BrandsSection = styled.section`
  padding-top: 6em;
  text-align: justify;

  ${media.md`
    padding-top: 10em;
  `}
`;

const ProductsPage = ({ data: response }) => {
  const data = get(response, "allSanityProducts.nodes[0]", {});

  return (
    <PageLayout colorTheme="light" seoProps={data.seo}>
      <PhotoHero
        fluidImage={data.heroPhoto.asset.fluid}
        backgroundPosition="90%"
        overlayOpacity="0.25"
        title={data.title}
        anchor={{
          label: "Nasze marki",
          scrollTo: "#marki",
        }}
      />
      <BrandsSection id="marki">
        <BrandCard
          title={data.nosdpz.title}
          logo={data.nosdpz.logo.asset.url}
          youtubeId={data.nosdpz.youtubeUrl}
          gallery={data.nosdpz.images}
          alt={data.nosdpz.name}
        >
          <BlockContent blocks={data.nosdpz._rawBody} />
        </BrandCard>
        <BrandCard
          title={data.dpzspozycie.title}
          logo={data.dpzspozycie.logo.asset.url}
          youtubeId={data.dpzspozycie.youtubeUrl}
          gallery={data.dpzspozycie.images}
          alt={data.dpzspozycie.name}
          flip
        >
          <BlockContent blocks={data.dpzspozycie._rawBody} />
        </BrandCard>
      </BrandsSection>
      <IfShopOpen>
        <ShopTeaser title={data.shopTitle} body={data._rawShopBody} />
      </IfShopOpen>
    </PageLayout>
  );
};

export default ProductsPage;

export const pageQuery = graphql`
  query ProductsQuery {
    allSanityProducts {
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
        heroPhoto {
          asset {
            fluid(maxWidth: 1920) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        nosdpz {
          title
          _rawBody
          youtubeUrl
          logo {
            asset {
              url
            }
          }
          images {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        dpzspozycie {
          title
          _rawBody
          youtubeUrl
          logo {
            asset {
              url
            }
          }
          images {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        shopTitle
        _rawShopBody
      }
    }
  }
`;
