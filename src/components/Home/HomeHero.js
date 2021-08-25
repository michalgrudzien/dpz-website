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
              hotspot {
                height
                width
                x
                y
              }
              asset {
                fluid(maxWidth: 2400) {
                  src
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
      slides={data.heroPhotos}
      overlayOpacity="0.15"
      title="Dobra Praktyka Żeglarska"
      anchor={{
        label: "Kim jesteśmy?",
        scrollTo: "#kim-jestesmy",
      }}
    />
  );
};

export default HomeHero;
