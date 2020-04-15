import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import BackgroundImage from "gatsby-background-image";

const StyledBackground = styled(BackgroundImage)`
  height: 75vh;
  position: relative;

  ${({ backgroundPosition }) => `
  ::before{
    background-position-x: ${backgroundPosition} !important;
  }  
  `}

  ${media.md`
    height: 90vh;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ opacity }) => `
    background-color: rgba(0, 0, 0, ${opacity});
  `}
`;

const PhotoHero = ({
  fluidImage,
  backgroundPosition,
  backgroundStyle,
  overlayOpacity,
  title,
  anchor,
}) => {
  return (
    <StyledBackground
      Tag="section"
      fluid={fluidImage}
      backgroundPosition={backgroundPosition}
      style={backgroundStyle}
    >
      <Overlay opacity={overlayOpacity} />
    </StyledBackground>
  );
};

PhotoHero.defaultProps = {
  backgroundPosition: "50%",
  overlayOpacity: "0",
};

export default PhotoHero;
