import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { Link } from "gatsby";

import Card, { CardSidePadding } from "components/shared/Card";

import colors from "utils/colors";

import logoImg from "assets/images/logo_text.svg";
import mockImg from "assets/images/brand_photo.jpg";

const StyledSection = styled.section`
  padding: 3em 0 3em;

  ${media.md`
  padding: 5em 0 3em;
  `}
`;

const Heading = styled.h1`
  color: ${colors.primary};
  font-size: 2.5em;
`;

const LogoImg = styled.img`
  display: block;
  max-width: 140px;
  margin: 0 auto 2em 0;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-top: -1em;
  grid-template-columns: auto auto;

  ${media.md`
  padding: 0 1em 0 0;
  grid-template-columns: auto auto auto;
`}
`;

const GalleryImg = styled.img`
  width: 100%;
  border-radius: 1em;
`;

const WhoWeAre = () => (
  <StyledSection id="kim-jestesmy">
    <Container>
      <Row>
        <Col>
          <CardSidePadding>
            <Heading>Kim jesteśmy?</Heading>
          </CardSidePadding>

          <Card>
            <Row>
              <Col md="8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <Link to="/o-nas">Więcej o nas</Link>
                </p>
              </Col>
              <Col md="3" mdOffset="1" hiddenXsDown>
                <LogoImg src={logoImg} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardSidePadding>
            <GalleryWrapper>
              <GalleryImg src={mockImg} />
              <GalleryImg src={mockImg} />
              <GalleryImg src={mockImg} />
            </GalleryWrapper>
          </CardSidePadding>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default WhoWeAre;
