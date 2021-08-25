import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Youtube from "react-youtube-embed";

import PageLayout from "components/PageLayout";
import Card from "components/shared/Card";
import { boxShadow } from "utils/styles";
import { graphql } from "gatsby";
import get from "lodash.get";
import BlockContent from "components/BlockContent";
import CircleFile from "components/shared/CircleFile";

const StyledSection = styled.section`
  padding: 8em 0 2em;
  ${media.md`
    padding: 12em 0 4em;
  `}
`;

const Title = styled.h1`
  text-align: center;
`;

const YoutubeWrapper = styled.div`
  ${boxShadow};
  border-radius: 0 0 1em 1em;
  overflow: hidden;
`;

const CircleWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const CookiesPage = ({ data: response }) => {
  const data = get(response, "allSanityPrivacyPolicy.nodes[0]", {});

  return (
    <PageLayout colorTheme="dark" withCookiesModal={false} seoProps={data.seo}>
      <StyledSection>
        <Container>
          <Row>
            <Col>
              <Title>{data.title}</Title>
              <Card>
                <BlockContent blocks={data._rawBody} />
                <CircleWrapper>
                  <CircleFile
                    label="Nasza polityka prywatności (PDF)"
                    url={data.file.asset.url}
                    dark
                  />
                </CircleWrapper>
              </Card>
              <YoutubeWrapper>
                <Youtube id={data.youtubeUrl} aspectRatio="68.3%" />
              </YoutubeWrapper>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </PageLayout>
  );
};

export default CookiesPage;

export const pageQuery = graphql`
  query PrivacyPolicyQuery {
    allSanityPrivacyPolicy {
      nodes {
        seo {
          title
          description
          image {
            asset {
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
        title
        _rawBody
        youtubeUrl
        file {
          asset {
            url
          }
        }
      }
    }
  }
`;
