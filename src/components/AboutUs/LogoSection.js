import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import Card from "components/shared/Card";
import BlockContent from "components/BlockContent";

import logoTextBg from "assets/images/logo_text_bg.svg";
import logoPartsImg from "assets/images/logo_parts.svg";
import { graphql, useStaticQuery } from "gatsby";
import { getSingleNode } from "helpers/nodeExtractors";

const StyledSection = styled.section`
  padding: 5em 0 3em;

  ${media.md`
  padding: 8em 0 3em;
  `}
`;

const LogoPartsWrapper = styled.div`
  padding: 3em 0;

  ${media.md`
    padding: 4em 0;
  `}

  ${media.lg`
    height: 520px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    background-image: url(${logoTextBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `};
`;

const LogoPartsImg = styled.img`
  display: block;
  width: 100%;
  padding: 0 2em;
  margin: 0 auto;

  ${media.lg`
    width: 75%;
  `}
`;

const LogoTextWrapper = styled.div`
  text-align: justify;
  margin: 1em 0 1em 2.5%;
`;

const LogoSection = () => {
  const response = useStaticQuery(graphql`
    query LogoAboutUsQuery {
      allSanityAboutUs {
        nodes {
          content {
            _rawLogoTopBody
            _rawLogoBottomBody
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "aboutUs");

  return (
    <StyledSection id="logo">
      <Container>
        <Row>
          <Col>
            <LogoTextWrapper>
              <BlockContent blocks={data._rawLogoTopBody} />
            </LogoTextWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <LogoPartsWrapper>
              <Row alignItems="center">
                <Col md={10} mdOffset={1}>
                  <LogoPartsImg src={logoPartsImg} alt="Logo DPŻ - geneza" />
                </Col>
              </Row>
            </LogoPartsWrapper>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <LogoTextWrapper>
                <BlockContent blocks={data._rawLogoBottomBody} />
              </LogoTextWrapper>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default LogoSection;
