import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

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

const ProductsTeaser = () => (
  <section>
    <Container>
      <Row alignItems="center">
        <Col lg="4">
          <Title>Nasze produkty</Title>
        </Col>
        <Col lg="4" xs="4" sm="4">
          <Photo src={mockPhoto} />
        </Col>
        <Col lg="4" xs="4" sm="4">
          <Photo src={mockPhoto} />
        </Col>

        <Col lg="4" xs="4" sm="4">
          <Photo src={mockPhoto} />
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
              <LinkButton internal to="/">
                Więcej o produktach DPŻ
              </LinkButton>
              <LinkButton href="/">Przejdź do zamawialni</LinkButton>
            </ButtonWrapper>
          </TextWrapper>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ProductsTeaser;
