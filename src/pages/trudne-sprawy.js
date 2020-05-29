import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Youtube from "react-youtube-embed";

import PageLayout from "components/PageLayout";
import Card, { CardSidePadding } from "components/shared/Card";
import { boxShadow } from "utils/styles";

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
`;

const CookiesPage = () => (
  <PageLayout colorTheme="dark">
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <Title>Trudne sprawy</Title>
            <Card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </Card>
            <YoutubeWrapper>
              <Youtube id="I01XMRo2ESg" aspectRatio="68.3%" />
            </YoutubeWrapper>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  </PageLayout>
);

export default CookiesPage;
