import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import colors from "utils/colors";
import YouTube from "react-youtube-embed";

import { boxShadow } from "utils/styles";
import Slider from "components/shared/Slider";

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
          <Slider gallery={gallery} />
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
