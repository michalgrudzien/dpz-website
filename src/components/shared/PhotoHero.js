import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import BackgroundImage from "gatsby-background-image";

import colors from "utils/colors";
import ScrollAnchor from "components/shared/ScrollAnchor";

const Wrapper = styled.div`
  overflow: hidden;

  ${media.md`
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  `}
`;

const StyledBackground = styled(BackgroundImage)`
  height: 75vh;
  position: relative;

  ${({ backgroundPosition }) => `
  ::before{
    background-position-x: ${backgroundPosition} !important;
  }  
  `}

  ${media.md`
    height: 85vh;
    border-radius: 40px;
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

const PhotoHero = ({
  fluidImage,
  backgroundPosition,
  backgroundStyle,
  overlayOpacity,
  title,
  anchor,
}) => {
  return (
    <Wrapper>
      <StyledBackground
        Tag="section"
        fluid={fluidImage}
        backgroundPosition={backgroundPosition}
        style={backgroundStyle}
      >
        <Overlay opacity={overlayOpacity} />
        <ContentWrapper>
          <Container>
            <Row>
              <Col col={6} sm={4} md={3}>
                <StyledScrollAnchor {...anchor} />
              </Col>
              <Col col={6} sm={8} md={9}>
                <Title>{title}</Title>
              </Col>
            </Row>
          </Container>
        </ContentWrapper>
      </StyledBackground>
    </Wrapper>
  );
};

PhotoHero.defaultProps = {
  backgroundPosition: "50%",
  overlayOpacity: "0",
};

export default PhotoHero;
