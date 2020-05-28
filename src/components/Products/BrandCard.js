import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Youtube from "react-youtube-embed";

import colors from "utils/colors";

import Card, { CardSidePadding } from "components/shared/Card";

import mockImg from "assets/images/brand_photo.jpg";

const Wrapper = styled.div`
  padding-bottom: 4em;

  ${media.md`
    padding-bottom: 10em;
  `}

  &:last-child {
    padding-bottom: 2em;
  }
`;

const Heading = styled.h1`
  color: ${colors.primary};
  font-size: 2.5em;

  ${media.md`
    ${({ flip }) =>
      flip &&
      `
        text-align: right;
    `}
    `}
`;

const LogoImg = styled.img`
  max-width: 66%;
  margin: 2em auto;
  display: block;

  ${media.md`
    max-width: 50%;
  `}
`;

const ContentWrapper = styled.div`
  ${media.md`
    ${({ flip }) =>
      flip &&
      `
        text-align: right;
    `}
    `}
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 0 1em;
  margin-top: -1em;
  grid-template-columns: auto auto;

  ${media.md`
    padding: 0 1em 0 0;
    grid-template-columns: auto auto auto;

    ${({ flip }) =>
      flip &&
      `
        padding: 0 0 0 1em;
    `}
  `}
`;

const YoutubeItemWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;

  border-radius: 1em;
  overflow: hidden;
`;

const GalleryImg = styled.img`
  width: 100%;
  border-radius: 1em;

  :last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  ${media.md`
    :last-child {
        grid-column-start: 3;
        grid-column-end: 3;
    }
  `}
`;

const BrandCard = ({
  title,
  logo,
  alt,
  youtubeId,
  children,
  className,
  flip,
}) => (
  <Wrapper className={className}>
    <Container>
      <Row>
        <Col>
          <CardSidePadding>
            <Heading flip={flip}>{title}</Heading>
          </CardSidePadding>
          <Card>
            <Container fluid>
              <Row alignItems="center">
                <Col noGutter col={12} md={6} mdOrder={flip ? "first" : "last"}>
                  <LogoImg src={logo} alt={alt} />
                </Col>
                <Col noGutter col={12} md={6}>
                  <ContentWrapper flip={flip}>{children}</ContentWrapper>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={10} mdOffset={flip ? 0 : 2}>
          <GalleryWrapper flip={flip}>
            <YoutubeItemWrapper>
              <Youtube id={youtubeId} aspectRatio="68.3%" />
            </YoutubeItemWrapper>
            <GalleryImg src={mockImg} />
            <GalleryImg src={mockImg} />
            <GalleryImg src={mockImg} />
            <GalleryImg src={mockImg} />
            <GalleryImg src={mockImg} />
          </GalleryWrapper>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default BrandCard;
