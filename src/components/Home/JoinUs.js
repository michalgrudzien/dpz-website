import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import CircleFile from "components/shared/CircleFile";
import { CardSidePadding } from "components/shared/Card";
import BlockContent from "components/BlockContent";

import { boxShadow } from "utils/styles";
import colors from "utils/colors";

import logoCornerImg from "assets/images/logo_corner.svg";
import { getSingleNode } from "helpers/nodeExtractors";

const Wrapper = styled.section`
  margin-top: -200px;
`;

const ContentCard = styled.div`
  ${boxShadow}
  background-color: ${colors.white};
  color: ${colors.secondary};
  padding: 4em 0 3em;
  text-align: justify;

  ${media.lg`
    padding: 4em 0 3em;
    background-image: url(${logoCornerImg});
    background-size: 240px;
    background-repeat: no-repeat;
    background-position: bottom left;
  `}
`;

const Title = styled.h1`
  text-align: center;
  color: ${colors.primary};
  margin-bottom: 1.5em;
`;

const GroupPhotoImg = styled(Img)`
  border-radius: 0 0 40px 40px;
  width: 100%;
  margin: 3em 0;
`;

const FilesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-row-gap: 24px;

  ${media.lg`
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    width: 100%;
  `};
`;

const StyledCircleFile = styled(CircleFile)`
  margin: 0 auto;
`;

const SecondaryText = styled.div`
  padding-bottom: 1.5em;
  a {
    color: ${colors.primary};
  }
  ${media.lg`
    padding-bottom: 200px;
  `}
`;

const JoinUs = () => {
  const response = useStaticQuery(graphql`
    query JoinUsQuery {
      allSanityHomepage {
        nodes {
          content {
            joinUs_title
            joinUs_photo {
              asset {
                fluid(maxWidth: 1200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _rawJoinUsBody
            _rawJoinUsBottomBody
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "homepage");

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg="10" lgOffset="1">
            <ContentCard>
              <CardSidePadding>
                <Title>{data.joinUs_title}</Title>
                <BlockContent blocks={data._rawJoinUsBody} />
              </CardSidePadding>
              <GroupPhotoImg fluid={data.joinUs_photo.asset.fluid} />
              <CardSidePadding>
                <Row>
                  <Col lg="6">
                    <SecondaryText>
                      <BlockContent blocks={data._rawJoinUsBottomBody} />
                    </SecondaryText>
                  </Col>
                  <Col lg="6">
                    <FilesWrapper>
                      <StyledCircleFile
                        url="/documents/dpz_deklaracja_czlonkowska.pdf"
                        label="Deklaracja członkowska"
                        dark
                      />
                      <StyledCircleFile
                        url="/documents/dpz_statut_latest.pdf"
                        label="Statut Stowarzyszenia"
                        dark
                      />
                    </FilesWrapper>
                  </Col>
                </Row>
              </CardSidePadding>
            </ContentCard>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default JoinUs;
