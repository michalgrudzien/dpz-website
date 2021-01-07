import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import songbookBgImg from "assets/images/spiewnik_bg.jpg";
import colors from "utils/colors";
import CircleFile from "components/shared/CircleFile";
import LinkButton from "components/shared/LinkButton";
import CircleNumber from "components/shared/CircleNumber";

const Wrapper = styled.section`
  padding: 3em 0;
  margin: 4em 0;
  background-image: url(${songbookBgImg});
  border-radius: 0 0 40px 40px;
  color: ${colors.white};

  position: relative;
  z-index: 10;
`;

const Heading = styled.h1`
  color: ${colors.white};
`;

const LinksWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 24px;
  width: fit-content;
  margin: 2em auto 0;

  ${media.lg`
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  `}
`;

const Songbook = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg="6">
          <Heading>Jedyny i niepowtarzalny Śpiewnik DPŻ</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <LinkButton
            href="https://www.youtube.com/watch?v=wKPU-_QUTcA&list=PLAxNrJ8oszpi3qNYz-mLJTVS7sFEBaBUK"
            target="_blank"
            rel="noreferrer noopener"
          >
            Posłuchaj na YouTube
          </LinkButton>
        </Col>
        <Col lg="3" lgOffset="2">
          <LinksWrapper>
            <CircleNumber number="118" label="utworów z chwytami" />
            <CircleFile url="/" label="Śpiewnik DPŻ w formacie PDF" />
          </LinksWrapper>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default Songbook;
