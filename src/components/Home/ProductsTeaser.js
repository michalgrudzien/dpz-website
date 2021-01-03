import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { Parallax } from "react-scroll-parallax";

import mockPhoto from "assets/images/nos_dpz_teaser.jpg";
import nosLogoImg from "assets/images/nos_dpz_logo.svg";
import spozycieLogoImg from "assets/images/dpz_spozycie_logo.svg";
import colors from "utils/colors";
import LinkButton from "components/shared/LinkButton";

const Title = styled.h1`
  line-height: 1;
  display: inline-block;

  margin-right: 0.2em;

  ${media.lg`
  font-size: 6em;
  border-bottom: 2px ${colors.turquoise} solid;
  font-family: "Bebas Neue";
  text-align: right;
  float: right;
  `}
`;

const Photo = styled.img`
  width: 100%;
  margin: 1em auto;
  border-radius: 1em;
`;

const TextWrapper = styled.div`
  padding: 2em;
`;

const LogoImg = styled.img`
  display: block;
  max-width: 100%;
  margin: 3em auto 1em;

  ${media.sm`
    max-width: 200px;
  `}
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 3em;
`;

const StyledLinkButton = styled(LinkButton)`
  margin: 0.5em;
`;

const ProductsTeaser = ({ isOnMobile }) => (
  <section>
    <Container>
      <Row alignItems="center">
        <Col lg="4">
          <Parallax disabled={isOnMobile} x={[-5, 0]}>
            <Title>Nasze produkty</Title>
          </Parallax>
        </Col>
        <Col lg="4" xs="4" sm="4">
          <Parallax disabled={isOnMobile} y={[-5, 0]}>
            <Photo src={mockPhoto} />
          </Parallax>
        </Col>
        <Col lg="4" xs="4" sm="4">
          <Parallax disabled={isOnMobile} x={[5, 0]}>
            <Photo src={mockPhoto} />
          </Parallax>
        </Col>

        <Col lg="4" xs="4" sm="4">
          <Parallax disabled={isOnMobile} x={[-5, 0]}>
            <Photo src={mockPhoto} />
          </Parallax>
        </Col>
        <Col lg="8">
          <TextWrapper>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Row alignItems="center">
              <Col xs="6" sm="6" lg="6">
                <LogoImg src={nosLogoImg} />
              </Col>
              <Col xs="6" sm="6" lg="6">
                <LogoImg src={spozycieLogoImg} />
              </Col>
            </Row>
            <ButtonWrapper>
              <StyledLinkButton internal to="/produkty">
                Więcej o produktach DPŻ
              </StyledLinkButton>
              <StyledLinkButton href="https://zamow.depezet.com">
                Przejdź do zamawialni
              </StyledLinkButton>
            </ButtonWrapper>
          </TextWrapper>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ProductsTeaser;
