import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import CircleFile from "components/shared/CircleFile";
import ScrollAnchor from "components/shared/ScrollAnchor";
import colors from "utils/colors";

import documentIconImg from "assets/images/document_icon.svg";
import logoBg from "assets/images/logo_w_partial.svg";

const Section = styled.section`
  * {
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
  font-size: 0.88em;
  line-height: 1.2;
  color: ${colors.white};

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
