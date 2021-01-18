import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";

import CircleFile from "components/shared/CircleFile";
import LinkButton from "components/shared/LinkButton";
import CircleNumber from "components/shared/CircleNumber";

import songbookBgImg from "assets/images/spiewnik_bg.jpg";
import colors from "utils/colors";
import { getSingleNode } from "helpers/nodeExtractors";
import BlockContent from "components/BlockContent";

const Wrapper = styled.section`
  padding: 3em 0;
  margin: 4em 0;
  background-image: url(${songbookBgImg});
  border-radius: 0 0 40px 40px;
  color: ${colors.white};

  position: relative;
  z-index: 10;
`;

const Heading = styled.h1`
  color: ${colors.white};
`;

const LinksWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 24px;
  width: fit-content;
  margin: 2em auto 0;

  ${media.lg`
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  `}
`;

const Songbook = () => {
  const response = useStaticQuery(graphql`
    query SongbookQuery {
      allSanityHomepage {
        nodes {
          content {
            songbook_title
            _rawSongbookBody
            songbook_number
            songbook_numberCaption
            songbook_youtubePlaylistUrl
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
          <Col lg="6">
            <Heading>{data.songbook_title}</Heading>
            <BlockContent blocks={data._rawSongbookBody} />
            <LinkButton
              href={data.songbook_youtubePlaylistUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Posłuchaj na YouTube
            </LinkButton>
          </Col>
          <Col lg="3" lgOffset="2">
            <LinksWrapper>
              <CircleNumber
                number={data.songbook_number}
                label={data.songbook_numberCaption}
              />
              <CircleFile
                url="/media/spiewnik_dpz_print_latest.pdf"
                label="Śpiewnik DPŻ w formacie PDF"
              />
            </LinksWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Songbook;
