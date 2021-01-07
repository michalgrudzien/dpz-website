import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import spotifyBgImg from "assets/images/spotify_bg.svg";
import turboblogoscImg from "assets/images/turboblogosc.jpg";
import hardbassImg from "assets/images/hardbass.jpg";
import singalongImg from "assets/images/singalong.jpg";
import colors from "utils/colors";
import { boxShadow } from "utils/styles";

const Wrapper = styled.section`
  padding: 8em 0;
  margin-top: -100px;
  background-image: url(${spotifyBgImg});
  background-size: 600px 600px;
  background-position: -110px -80px;
  background-repeat: no-repeat;
  min-height: 480px;
`;

const CoversWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1em;
  margin-top: 2em;
`;

const CoverLink = styled.a`
  box-shadow: inset 0px 0px 0px 0px ${colors.turquoise};
  transition: box-shadow 150ms ease-in;
  border-radius: 16px;

  img {
    width: 100%;
    border-radius: 16px;
    position: relative;
    top: 0px;
    transition: all 150ms ease-in;
  }

  :hover {
    box-shadow: inset 0px 0px 0px 8px ${colors.turquoise};
    img {
      top: -2px;
    }
  }
`;

const Spotify = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg="4">
          <h1>Spotify</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col lg="7" lgOffset="1">
          <CoversWrapper>
            <CoverLink
              href="spotify:user:styczen_mg:playlist:61x7lyAvTQII7oTAZFQxqQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={turboblogoscImg} alt="DPŻ Turbobłogość" />
            </CoverLink>
            <CoverLink
              href="spotify:user:styczen_mg:playlist:36JcgyVD7XZEPTXbVMpS9t"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={hardbassImg} alt="DPŻ Hardbass Megaparty" />
            </CoverLink>
            <CoverLink
              href="spotify:user:styczen_mg:playlist:5eV4fOpXpLd6KdDzH9c7VA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={singalongImg} alt="DPŻ Sing-along" />
            </CoverLink>
          </CoversWrapper>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default Spotify;
