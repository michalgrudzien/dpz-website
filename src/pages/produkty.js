import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "components/PageLayout";
import PhotoHero from "components/shared/PhotoHero";

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
  console.log(images);

  return (
    <PageLayout colorTheme="light">
      <PhotoHero
        fluidImage={images.heroImage.childImageSharp.fluid}
        backgroundPosition="90%"
        overlayOpacity="0.1"
      />
    </PageLayout>
  );
};

export default ProductsPage;
