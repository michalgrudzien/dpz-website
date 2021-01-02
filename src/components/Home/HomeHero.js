import React from "react";

import PhotoHero from "components/shared/PhotoHero";

const HomeHero = ({ images }) => (
  <PhotoHero
    fluidImage={images[Math.floor(Math.random() * images.length)]}
    backgroundPosition="100%"
    overlayOpacity="0.25"
    title="Dobra Praktyka Żeglarska"
    anchor={{
      label: "Kim jesteśmy?",
      scrollTo: "#kim-jestesmy",
    }}
  />
);

export default HomeHero;
