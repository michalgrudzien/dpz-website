import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Youtube from "react-youtube-embed";

import colors from "utils/colors";
import { animatedGradientBg, boxShadow } from "utils/styles";

import wtLogoImg from "assets/images/dpz_world_tour_logo_w.svg";

const Wrapper = styled.section`
  padding: 2em 0;
`;

const BackgroundWrapper = styled.div`
  ${animatedGradientBg};
  color: ${colors.white};
  padding: 5em 0 215px;
  border-radius: 0 0 40px 40px;

  * {
    color: inherit;
  }
`;

const VideoWrapper = styled.div`
  margin-top: -200px;
  margin-bottom: 4em;
`;

const VideoTitle = styled.h2`
  font-size: 1.5em;
  color: ${colors.white};
  padding-left: 1em;
`;

const YoutubeWrapper = styled.div`
  ${boxShadow};
  border-radius: 1em;
  overflow: hidden;
`;

const YoutubeTeaser = styled.div`
  text-align: right;
  padding: 1em;
  font-size: 1em;
`;

const YoutubeLink = styled.a`
  color: ${colors.red};
`;

const LogoImg = styled.img`
  max-width: 300px;
`;

const LatestTrip = () => (
  <Wrapper>
    <BackgroundWrapper>
      <Container>
        <Row>
          <Col>
            <h1>Ostatnie cumowanie: DPŻ World Tour 2019</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col hiddenMdDown lg="4" lgOffset="2">
            <LogoImg src={wtLogoImg} alt="DPŻ World Tour" />
          </Col>
        </Row>
      </Container>
    </BackgroundWrapper>
    <VideoWrapper>
      <Container>
        <VideoTitle>
          DPŻ World Tour: Mazury 2019 - Miuosh & Bajm - Miasto szczęścia
        </VideoTitle>
        <YoutubeWrapper>
          <Youtube id="scOuCXapnm4" aspectRatio="56.25%" />
        </YoutubeWrapper>
        <YoutubeTeaser>
          <span>
            Więcej znajdziesz na naszym{" "}
            <YoutubeLink
              href="https://www.youtube.com/channel/UCku8IcZT7gwCDSfonuduBew"
              target="_blank"
              rel="noreferrer noopener"
            >
              kanale YouTube
            </YoutubeLink>
            .
          </span>
        </YoutubeTeaser>
      </Container>
    </VideoWrapper>
  </Wrapper>
);

export default LatestTrip;
