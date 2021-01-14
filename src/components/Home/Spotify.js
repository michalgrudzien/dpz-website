import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import SanityBlockContent from "@sanity/block-content-to-react";

import colors from "utils/colors";
import { getHomepageSingleNode } from "helpers/nodeExtractors";

import spotifyBgImg from "assets/images/spotify_bg.svg";

const Wrapper = styled.section`
  padding: 8em 0;
  margin-top: -100px;
  background-image: url(${spotifyBgImg});
  background-size: 600px 600px;
  background-position: -110px -80px;
  background-repeat: no-repeat;
  min-height: 480px;
`;

const CoversWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1em;
  margin-top: 2em;
`;

const CoverLink = styled.a`
  box-shadow: inset 0px 0px 0px 0px ${colors.turquoise};
  transition: box-shadow 150ms ease-in;
  border-radius: 16px;

  :hover {
    box-shadow: inset 0px 0px 0px 8px ${colors.turquoise};
  }
`;

const CoverImg = styled(Img)`
  width: 100%;
  border-radius: 16px;
  position: relative;
  top: 0px;
  transition: all 150ms ease-in;

  :hover {
    top: -4px;
  }
`;

const Spotify = () => {
  const response = useStaticQuery(graphql`
    query SpotifyQuery {
      allSanityHomepage {
        nodes {
          content {
            _rawSpotifyBody
            spotify_playlists {
              name
              spotifyUrl
              coverImage {
                asset {
                  fluid(maxWidth: 500) {
                    ...GatsbySanityImageFluid
                  }
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
    <Wrapper>
      <Container>
        <Row>
          <Col lg="4">
            <h1>Spotify</h1>
            <SanityBlockContent blocks={data._rawSpotifyBody} />
          </Col>
          <Col lg="7" lgOffset="1">
            <CoversWrapper>
              {data.spotify_playlists.map(playlist => (
                <CoverLink
                  href={playlist.spotifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CoverImg
                    fluid={playlist.coverImage.asset.fluid}
                    alt={playlist.name}
                  />
                </CoverLink>
              ))}
            </CoversWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Spotify;
