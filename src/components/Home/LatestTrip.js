import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Youtube from "react-youtube-embed";
import { Parallax } from "react-scroll-parallax";
import { graphql, useStaticQuery } from "gatsby";

import BlockContent from "components/BlockContent";

import colors from "utils/colors";
import { animatedGradientBg, boxShadow } from "utils/styles";
import { getSingleNode } from "helpers/nodeExtractors";
import get from "lodash.get";

const Wrapper = styled.section`
  padding: 2em 0;
`;

const BackgroundWrapper = styled.div`
  ${animatedGradientBg};
  color: ${colors.white};
  padding: 5em 0 215px;
  border-radius: 0 0 40px 40px;

  * {
    color: inherit;
  }
`;

const VideoWrapper = styled.div`
  margin-top: -200px;
  margin-bottom: 4em;
`;

const VideoTitle = styled.h2`
  font-size: 1.5em;
  color: ${colors.white};
  padding-left: 1em;
`;

const YoutubeWrapper = styled.div`
  ${boxShadow};
  border-radius: 1em;
  overflow: hidden;
`;

const YoutubeTeaser = styled.div`
  text-align: right;
  padding: 1em;
  font-size: 1em;
`;

const YoutubeLink = styled.a`
  color: ${colors.red};
`;

const LogoImg = styled.img`
  max-width: 300px;
`;

const LatestTrip = ({ isOnMobile }) => {
  const response = useStaticQuery(graphql`
    query LatestTripQuery {
      allSanitySiteMetadata {
        nodes {
          socialMedia {
            youtube
          }
        }
      }
      allSanityHomepage {
        nodes {
          content {
            _rawLatestCruiseBody
            latestCruise_title
            latestCruise_youtubeTitle
            latestCruise_youtubeUrl
            latestCruise_cruiseLogo {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "homepage");
  const youtubeUrl = get(
    response,
    "allSanitySiteMetadata.nodes[0].socialMedia.youtube",
    ""
  );

  return (
    <Wrapper>
      <BackgroundWrapper>
        <Container>
          <Row>
            <Col>
              <h1>{data.latestCruise_title}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <BlockContent blocks={data._rawLatestCruiseBody} />
            </Col>
            <Col hiddenMdDown lg="4" lgOffset="2">
              <LogoImg src={data.latestCruise_cruiseLogo.asset.url} alt="DPŻ" />
            </Col>
          </Row>
        </Container>
      </BackgroundWrapper>
      <Parallax y={[10, -10]} disabled={isOnMobile}>
        <VideoWrapper>
          <Container>
            <VideoTitle>{data.latestCruise_youtubeTitle}</VideoTitle>
            <YoutubeWrapper>
              <Youtube id={data.latestCruise_youtubeUrl} aspectRatio="56.25%" />
            </YoutubeWrapper>
            <YoutubeTeaser>
              <span>
                Więcej znajdziesz na naszym{" "}
                <YoutubeLink
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  kanale YouTube
                </YoutubeLink>
                .
              </span>
            </YoutubeTeaser>
          </Container>
        </VideoWrapper>
      </Parallax>
    </Wrapper>
  );
};

export default LatestTrip;
