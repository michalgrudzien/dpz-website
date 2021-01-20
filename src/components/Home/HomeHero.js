import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import PhotoHero from "components/shared/PhotoHero";
import { getSingleNode } from "helpers/nodeExtractors";

const HomeHero = () => {
  const response = useStaticQuery(graphql`
    query HomeHeroQuery {
      allSanityHomepage {
        nodes {
          content {
            heroPhotos {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "homepage");

  return (
    <PhotoHero
      fluidImage={
        data.heroPhotos[Math.floor(Math.random() * data.heroPhotos.length)]
          .asset.fluid
      }
      backgroundPosition="100%"
      overlayOpacity="0.25"
      title="Dobra Praktyka Żeglarska"
      anchor={{
        label: "Kim jesteśmy?",
        scrollTo: "#kim-jestesmy",
      }}
    />
  );
};

export default HomeHero;
