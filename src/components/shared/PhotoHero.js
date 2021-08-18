import React from "react";
import styled, { css } from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Slider from "react-slick";
import BackgroundImage from "gatsby-background-image";

import ScrollAnchor from "components/shared/ScrollAnchor";

import colors from "utils/colors";
import { animatedGradientBg, boxShadow } from "utils/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import get from "lodash.get";

const commonBackgroundStyles = css`
  max-width: 100%;
  height: 75vh;
  position: relative;

  ${media.md`
    height: 85vh;
  `}
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 75vh;
  ${animatedGradientBg};
  ${boxShadow};

  ${media.md`
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    height: 85vh;
  `}
`;

const StyledBackground = styled(BackgroundImage)`
  ${commonBackgroundStyles};

  ${({ backgroundPosition }) => `
  ::before{
    background-position-x: ${backgroundPosition} !important;
  }  
  `}
`;

const BackgroundSlide = styled.div`
  ${commonBackgroundStyles};
  background-size: cover;
  background-position-x: ${({ posX }) => posX};
  background-position-y: ${({ posY }) => posY};
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};

  ${media.md`
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
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

  ${media.md`
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  `}
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Title = styled.h1`
  position: relative;
  top: 0.225em;
  margin: 0;
  color: ${colors.white};

  float: right;
  text-align: right;

  font-size: 4em;
  line-height: 1;

  ${media.lg`
    font-size: 6em;
  `}
`;

const StyledScrollAnchor = styled(ScrollAnchor)`
  position: absolute;
  bottom: 1.5em;
`;

const sliderConfig = {
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 8000,
  lazyLoad: true,
  swipe: true,
};

const Background = ({
  fluidImage,
  backgroundPosition,
  backgroundStyle,
  slides,
  children,
}) => {
  if (fluidImage) {
    return (
      <StyledBackground
        Tag="section"
        fluid={fluidImage}
        backgroundPosition={backgroundPosition}
        style={backgroundStyle}
      >
        {children}
      </StyledBackground>
    );
  } else {
    return (
      <>
        <Slider {...sliderConfig}>
          {slides
            .sort(() => Math.random() - 0.5)
            .map((slide) => (
              <BackgroundSlide
                backgroundUrl={slide.asset.fluid.src}
                posX={get(slide, "hotspot.x", 0.5) * 100 + "%"}
                posY={get(slide, "hotspot.y", 0.5) * 100 + "%"}
              >
                {children}
              </BackgroundSlide>
            ))}
        </Slider>
      </>
    );
  }
};

const PhotoHero = ({
  fluidImage,
  slides,
  backgroundPosition,
  backgroundStyle,
  overlayOpacity,
  title,
  anchor,
}) => {
  return (
    <Wrapper>
      <Background
        fluidImage={fluidImage}
        backgroundPosition={backgroundPosition}
        backgroundStyle={backgroundStyle}
        slides={slides}
      >
        <Overlay opacity={overlayOpacity} />
        <ContentWrapper>
          <Container>
            <Row>
              <Col col={6} sm={4} md={2}>
                <StyledScrollAnchor {...anchor} />
              </Col>
              <Col col={6} sm={8} md={10}>
                <Title>{title}</Title>
              </Col>
            </Row>
          </Container>
        </ContentWrapper>
      </Background>
    </Wrapper>
  );
};

PhotoHero.defaultProps = {
  backgroundPosition: "50%",
  overlayOpacity: "0",
  fluidImage: null,
  slides: [],
};

export default PhotoHero;
