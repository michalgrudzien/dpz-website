import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";

import CircleFile from "components/shared/CircleFile";
import ScrollAnchor from "components/shared/ScrollAnchor";
import BlockContent from "components/BlockContent";

import colors from "utils/colors";

import documentIconImg from "assets/images/document_icon.svg";
import logoBg from "assets/images/logo_w_partial.svg";
import { getSingleNode } from "helpers/nodeExtractors";

const Section = styled.section`
  h1,
  h2,
  p {
    color: ${colors.white};
  }
  background-color: ${colors.darkBlue};
  padding-top: 92px;
  padding-bottom: 24px;
  margin-top: -64px;

  ${media.md`
    padding-top: 120px;
    background-image: url(${logoBg});
    background-repeat: no-repeat;
    background-position-y: 100.1%;
    background-position-x: 75%;
    background-size: 15%;

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  `}
`;

const StatuteFile = styled(CircleFile)`
  float: right;

  ${media.md`
    float: none;
    margin: 48px auto 0;
  `}
`;

const DocumentsList = styled.ul`
  margin-top: 3em;
  ${media.md`
    display: grid;
    grid-row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const DocumentsListItem = styled.li`
  margin-bottom: 3em;
  margin-right: 1em;
  display: block;
`;

const DocumentsListItemLink = styled.a`
  ::before {
    content: "";
    display: inline-block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${documentIconImg});
  }

  text-decoration: none;
  font-size: 0.88em;
  line-height: 1.2;
  font-weight: 500;
  color: ${colors.white};

  :hover {
    text-decoration: underline;
  }

  small {
    font-weight: 300;
    color: ${colors.lightGrey};
  }
`;

const DocumentsAttachments = styled.div`
  margin: 0.5em 0 0 40px;
`;

const DocumentAttachmentsLink = styled.a`
  color: ${colors.white};
  margin-right: 1em;
  font-size: 0.75em;
  text-decoration: none;
  display: inline-block;

  :hover {
    text-decoration: underline;
  }
`;

const LogoScrollAnchor = styled(ScrollAnchor)`
  margin-top: 3em;

  ${media.md`
    align-items: start;
  `}
`;

const renderDocuments = documents =>
  documents.map(document => {
    const {
      title,
      publishedAt,
      file: {
        asset: { url },
      },
      attachments,
    } = document;

    return (
      <DocumentsListItem>
        <div>
          <DocumentsListItemLink
            href={url}
            title={title}
            target="_blank"
            rel="noreferrer noopener"
          >
            <small>{publishedAt}</small>
            <br />
            {title}
          </DocumentsListItemLink>
          <DocumentsAttachments>
            {attachments.map(({ title, file: { asset: { url } } }) => (
              <DocumentAttachmentsLink
                href={url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {title}
              </DocumentAttachmentsLink>
            ))}
          </DocumentsAttachments>
        </div>
      </DocumentsListItem>
    );
  });

const StatuteSection = () => {
  const response = useStaticQuery(graphql`
    query StatuteAboutUsQuery {
      allSanityAboutUs {
        nodes {
          content {
            statuteTitle
            _rawStatuteBody
            documentsTitle
            documents {
              title
              publishedAt
              file {
                asset {
                  url
                }
              }
              attachments {
                title
                publishedAt
                file {
                  asset {
                    url
                  }
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
    <Section>
      <Container>
        <Row>
          <Col md="9">
            <h1>{data.statuteTitle}</h1>
            <BlockContent blocks={data._rawStatuteBody} />
          </Col>
          <Col md="3">
            <StatuteFile url="#" label="Statut stowarzyszenia" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{data.documentsTitle}</h2>
            <DocumentsList>
              {renderDocuments(data.documents.reverse())}
            </DocumentsList>
          </Col>
        </Row>
        <Row>
          <Col>
            <LogoScrollAnchor
              align="center"
              scrollTo="#logo"
              label="Logo i barwy klubowe"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default StatuteSection;
