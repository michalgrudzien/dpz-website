import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import logoTextBg from "assets/images/logo_text_bg.svg";
import logoPartsImg from "assets/images/logo_parts.svg";

import colorImg1 from "assets/images/color-item-1.svg";
import colorImg2 from "assets/images/color-item-2.svg";
import colorImg3 from "assets/images/color-item-3.svg";
import colorImg4 from "assets/images/color-item-4.svg";

import fontImg1 from "assets/images/font-item-1.svg";
import fontImg2 from "assets/images/font-item-2.svg";

import logoCardImg1 from "assets/images/logo-card-1.svg";
import logoCardImg2 from "assets/images/logo-card-2.svg";
import logoCardImg3 from "assets/images/logo-card-3.svg";

const LogoPartsWrapper = styled.div`
  margin: 2em 0;
  padding: 1em 0;

  ${media.md`
    margin: 4em 0;
  `}

  ${media.lg`
    height: 480px;
    display: flex;
    width: 100%;
    align-items: center;

    background-image: url(${logoTextBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
`;

const LogoPartsImg = styled.img`
  display: block;
  max-width: 100%;
  padding: 0 2em;
  margin: 0 auto 2.5em auto;

  ${media.md`
    margin-bottom: 0;
  `}

  ${media.lg`
    margin: 0 0 0 auto;
  `}
`;

const LogoPartsText = styled.div`
  text-align: center;

  ${media.md`
    text-align: left;
    p {
      margin-bottom: 0;
    }
  `}
`;

const ColorsGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const FontImg = styled.img`
  max-width: 100%;
  margin: 2.5em auto;
  display: block;

  ${media.md`
    margin: 4em auto 6em;
  `}
`;

const LogoImgCard = styled.img`
  width: calc(100% + 30px);
  margin-left: -15px;
  margin-top: -30px;
`;

const LogoTextWrapper = styled.div`
  margin: 1em 0 3em 2.5%;
`;

const LogoSection = () => {
  return (
    <section id="logo">
      <Container>
        <Row>
          <Col>
            <LogoPartsWrapper>
              <Row alignItems="center">
                <Col md={6} mdOrder="last">
                  <LogoPartsImg src={logoPartsImg} alt="Logo DPŻ - geneza" />
                </Col>
                <Col md={4} mdOffset={1}>
                  <LogoPartsText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt
                    </p>
                  </LogoPartsText>
                </Col>
              </Row>
            </LogoPartsWrapper>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ColorsGroup>
              <img src={colorImg1} alt="#0C1A2B" />
              <img src={colorImg2} alt="#38AECC" />
            </ColorsGroup>
          </Col>
          <Col md={6}>
            <ColorsGroup>
              <img src={colorImg3} alt="#38AECC - #0C1A2B" />
              <img src={colorImg4} alt="#707070" />
            </ColorsGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FontImg src={fontImg1} alt="Poppins" />
          </Col>
          <Col md={6}>
            <FontImg src={fontImg2} alt="Bebas Neue" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <LogoImgCard src={logoCardImg1} alt="Dobra Praktyka Żeglarska" />
          </Col>
          <Col md={4}>
            <LogoImgCard src={logoCardImg2} alt="Dobra Praktyka Żeglarska" />
          </Col>
          <Col md={4}>
            <LogoImgCard src={logoCardImg3} alt="Dobra Praktyka Żeglarska" />
          </Col>
        </Row>
        <Row>
          <Col>
            <LogoTextWrapper>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </LogoTextWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoSection;
