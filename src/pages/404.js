import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import colors from "utils/colors";
import LinkButton from "components/shared/LinkButton";

import notFoundGif from "assets/images/404.gif";
import { boxShadow } from "utils/styles";

const Wrapper = styled.div`
  padding: 10em 0 6em;
  text-align: center;

  h1 {
    color: ${colors.secondary};
  }
`;

const StyledImg = styled.img`
  border-radius: 35px;
  max-width: 100%;
  ${boxShadow};

  margin-top: 4em;

  ${media.md`
    margin-top: 0;
  `}
`;

const NotFoundPage = () => (
  <PageLayout colorTheme="dark" seoProps={{ title: "404 - nie znaleziono" }}>
    <Wrapper>
      <Container>
        <Row alignItems="center">
          <Col md={6}>
            <h1>404 - nie ma takiej strony</h1>
            <LinkButton to="/" internal>
              Wracam na stronę główną
            </LinkButton>
          </Col>
          <Col md={6}>
            <StyledImg src={notFoundGif} alt="Nie ma takiej strony" />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </PageLayout>
);

export default NotFoundPage;
