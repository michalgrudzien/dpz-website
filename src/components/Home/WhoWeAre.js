import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, Link, useStaticQuery } from "gatsby";
import SanityBlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";

import Card, { CardSidePadding } from "components/shared/Card";

import colors from "utils/colors";
import { getHomepageSingleNode } from "helpers/nodeExtractors";

import logoImg from "assets/images/logo_text.svg";

const StyledSection = styled.section`
  padding: 3em 0 3em;

  ${media.md`
  padding: 5em 0 3em;
  `}
`;

const Heading = styled.h1`
  color: ${colors.primary};
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
  grid-template-columns: 33% 33%;
`}
`;

const GalleryImg = styled(Img)`
  width: 100%;
  border-radius: 1em;
`;

const WhoWeAre = () => {
  const response = useStaticQuery(graphql`
    query WhoWeAreQuery {
      allSanityHomepage {
        nodes {
          content {
            _rawAboutUsBody
            aboutUs_title
            aboutUs_images {
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

  const data = getHomepageSingleNode(response);

  return (
    <StyledSection id="kim-jestesmy">
      <Container>
        <Row>
          <Col>
            <CardSidePadding>
              <Heading>{data.aboutUs_title}</Heading>
            </CardSidePadding>

            <Card>
              <Row>
                <Col md="8">
                  <p>
                    <SanityBlockContent blocks={data._rawAboutUsBody} />
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
                {data.aboutUs_images.map(image => (
                  <GalleryImg
                    fluid={image.asset.fluid}
                    alt="DPŻ - Dobra Praktyka Żeglarska"
                  />
                ))}
              </GalleryWrapper>
            </CardSidePadding>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default WhoWeAre;
