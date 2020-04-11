import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import CircleFile from "components/shared/CircleFile";
import colors from "utils/colors";

import documentIconImg from "assets/images/document_icon.svg";

const Section = styled.section`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding-top: 92px;
  margin-top: -64px;

  ${media.md`
    padding-top: 120px;
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
    columns: 2;
  `}
`;

const DocumentsListItem = styled.li`
  margin-bottom: 2em;
  margin-right: 1em;
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
  line-height: 1.2;
  color: ${colors.white};

  :hover {
    text-decoration: underline;
  }
`;

const StatuteSection = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col md="9">
            <h1>Statut</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </Col>
          <Col md="3">
            <StatuteFile url="#" label="Statut stowarzyszenia" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Podjęte uchwały</h2>
            <DocumentsList>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
              <DocumentsListItem>
                <DocumentsListItemLink href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </DocumentsListItemLink>
              </DocumentsListItem>
            </DocumentsList>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default StatuteSection;
