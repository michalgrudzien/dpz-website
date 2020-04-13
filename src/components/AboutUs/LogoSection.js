import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import colors from "utils/colors";

import logoTextBg from "assets/images/logo_text_bg.svg";
import logoPartsImg from "assets/images/logo_parts.svg";

import colorImg1 from "assets/images/color-item-1.svg";
import colorImg2 from "assets/images/color-item-2.svg";
import colorImg3 from "assets/images/color-item-3.svg";
import colorImg4 from "assets/images/color-item-4.svg";

const LogoPartsWrapper = styled.div`
  margin: 2em 0;
  padding: 1em 0;

  ${media.md`
    margin: 4em 0;
  `}

  ${media.lg`
    height: 500px;
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
              <img src={colorImg1} alt="" />
              <img src={colorImg2} alt="" />
            </ColorsGroup>
          </Col>
          <Col md={6}>
            <ColorsGroup>
              <img src={colorImg3} alt="" />
              <img src={colorImg4} alt="" />
            </ColorsGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoSection;
