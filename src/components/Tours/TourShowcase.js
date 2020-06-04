import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import colors from "utils/colors";
import YouTube from "react-youtube-embed";

import { boxShadow } from "utils/styles";

const Wrapper = styled.section`
  padding: 1em 0;
`;

const YearTitle = styled.h1`
  color: ${colors.primary};

  ${media.md`
    font-size: 8em;
    text-align: center;
  `}
`;

const SliderWrapper = styled.div`
  border-radius: 1em;
  overflow: hidden;
  margin: 1em 0;

  .awssld {
    --slider-height-percentage: 60%;
    --slider-transition-duration: 400ms;
    --organic-arrow-thickness: 4px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 32px;
    --organic-arrow-color: ${colors.primary};
    --control-button-width: 8%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: #62a4fa;
    --control-bullet-active-color: #538bd5;
    --loader-bar-color: ${colors.primary};
    --loader-bar-height: 4px;
  }
`;

const YouTubeWrapper = styled.div`
  border-radius: 1em;
  overflow: hidden;
  margin: 1em 0;

  ${media.md`
    position: relative;
    z-index: 10;
    transform: translateY(-64px);
    ${boxShadow};
  `}
`;

const TextWrapper = styled.div`
  ${media.md`
    padding-top: 32px;
  `}
`;

const TourShowcase = ({ year, gallery, youtubeId, children }) => (
  <Wrapper>
    <Container>
      <Row alignItems="center" justifyContent="center">
        <Col md={4}>
          <YearTitle>{year}</YearTitle>
        </Col>
        <Col md={4} mdOrder={4} mdAlignSelf="start">
          <TextWrapper>{children}</TextWrapper>
        </Col>
        <Col md={8} mdOrder={2}>
          <SliderWrapper>
            <AwesomeSlider>
              {gallery.map(galleryItem => (
                <div data-src={galleryItem} />
              ))}
            </AwesomeSlider>
          </SliderWrapper>
        </Col>
        <Col md={8} mdOrder={3}>
          <YouTubeWrapper>
            <YouTube id={youtubeId} aspectRatio="60%" />
          </YouTubeWrapper>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default TourShowcase;
