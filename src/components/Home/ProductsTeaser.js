import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { Parallax } from "react-scroll-parallax";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import LinkButton from "components/shared/LinkButton";
import BlockContent from "components/BlockContent";
import IfShopOpen from "components/IfShopOpen";

import { getSingleNode } from "helpers/nodeExtractors";
import colors from "utils/colors";

import nosLogoImg from "assets/images/nos_dpz_logo.svg";
import spozycieLogoImg from "assets/images/dpz_spozycie_logo.svg";

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

const GalleryImg = styled(Img)`
  width: 100%;
  margin: 1em auto;
  border-radius: 1em;
`;

const TextWrapper = styled.div`
  padding: 2em;
  text-align: justify;
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

const ProductsTeaser = ({ isOnMobile }) => {
  const response = useStaticQuery(graphql`
    query ProductsTeaserQuery {
      allSanityHomepage {
        nodes {
          content {
            _rawProductsBody
            products_images {
              asset {
                fluid(maxWidth: 920) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "homepage");

  return (
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
              <GalleryImg
                fluid={data.products_images[0].asset.fluid}
                alt="DPŻ: Nasze produkty"
              />
            </Parallax>
          </Col>
          <Col lg="4" xs="4" sm="4">
            <Parallax disabled={isOnMobile} x={[5, 0]}>
              <GalleryImg
                fluid={data.products_images[1].asset.fluid}
                alt="DPŻ: Nasze produkty"
              />
            </Parallax>
          </Col>

          <Col lg="4" xs="4" sm="4">
            <Parallax disabled={isOnMobile} x={[-5, 0]}>
              <GalleryImg
                fluid={data.products_images[2].asset.fluid}
                alt="DPŻ: Nasze produkty"
              />
            </Parallax>
          </Col>
          <Col lg="8">
            <TextWrapper>
              <BlockContent blocks={data._rawProductsBody} />
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
                <IfShopOpen>
                  <StyledLinkButton href="https://zamow.depezet.com">
                    Przejdź do zamawialni
                  </StyledLinkButton>
                </IfShopOpen>
              </ButtonWrapper>
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsTeaser;
