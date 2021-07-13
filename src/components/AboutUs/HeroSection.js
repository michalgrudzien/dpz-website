import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import CircleNumber from "components/shared/CircleNumber";
import Card, { CardSidePadding } from "components/shared/Card";
import BlockContent from "components/BlockContent";

import colors from "utils/colors";
import { getSingleNode } from "helpers/nodeExtractors";

const HeroWrapper = styled.div`
  position: relative;
  margin-top: 120px;

  ${media.md`
    margin-top: 180px;
  `}
`;

const HeroHeading = styled.h1`
  padding-left: 15px;

  ${media.md`
    padding-left: 40px;
  `}
`;

const HeroPretitle = styled.span`
  color: ${colors.primary};
  display: block;
`;

const HeroTitle = styled.span`
  display: block;
  font-size: 1.25em;
  padding-right: 30%;
`;

const MembersCount = styled(CircleNumber)`
  position: absolute;
  bottom: -10px;
  right: 15px;
  z-index: 10;

  ${media.sm`
    bottom: -40px;
    right: 35px;
  `}
`;

const HeroCard = styled(Card)`
  ${media.sm`
    margin-top: 24px;
  `}
`;

const ImagesWrapper = styled.div`
  margin-top: -16px;
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(3, 1fr);

  ${media.xs`
    grid-template-columns: 1fr;
  `}
`;

const Image = styled(Img)`
  border-radius: 1em;
  margin-bottom: 1em;
`;

const HeroSection = () => {
  const response = useStaticQuery(graphql`
    query AboutUsHeroQuery {
      allSanityAboutUs {
        nodes {
          content {
            pretitle
            title
            membersCount
            membersCountCaption
            _rawBody
            images {
              asset {
                fluid(maxWidth: 1200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "aboutUs");

  return (
    <section>
      <HeroWrapper>
        <Container>
          <Row>
            <Col>
              <HeroHeading>
                <HeroPretitle>{data.pretitle}</HeroPretitle>
                <HeroTitle>{data.title}</HeroTitle>
              </HeroHeading>
              <MembersCount
                number={data.membersCount}
                label={data.membersCountCaption}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <HeroCard>
                <BlockContent blocks={data._rawBody} />
              </HeroCard>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardSidePadding>
                <ImagesWrapper>
                  {data.images.map((image) => (
                    <Image
                      fluid={image.asset.fluid}
                      alt="Dobra Praktyka Żeglarska"
                    />
                  ))}
                </ImagesWrapper>
              </CardSidePadding>
            </Col>
          </Row>
        </Container>
      </HeroWrapper>
    </section>
  );
};

export default HeroSection;
