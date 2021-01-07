import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import { CardSidePadding } from "components/shared/Card";
import FeaturedPost from "components/shared/FeaturedPost";

import colors from "utils/colors";
import PostCard from "components/shared/PostCard";
import Button from "components/shared/Button";
import LinkButton from "components/shared/LinkButton";

const StyledSection = styled.section`
  padding: 3em 0 3em;

  ${media.md`
  padding: 5em 0 3em;
  `}
`;

const Heading = styled.h1`
  color: ${colors.primary};

  ${media.md`
    margin-bottom: 1em;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 2em auto;
  text-align: center;
`;

const News = () => (
  <StyledSection id="kim-jestesmy">
    <Container>
      <Row>
        <Col>
          <CardSidePadding>
            <Heading>Co słychać w klubie?</Heading>
          </CardSidePadding>
        </Col>
      </Row>
      <Row>
        <Col hiddenLgDown>
          <FeaturedPost />
        </Col>
      </Row>
      <Container>
        <Row>
          <Col md="6" hiddenLgUp>
            <PostCard text="aaaaasdasd asasd asd asd as dasd adasdad as dasdsad asd ddas a asd asdd dsadasdasd as da a das" />
          </Col>
          <Col md="6" lg="4">
            <PostCard text="aaaaasdasd asasd asd asd as dasd adasdad as dasdsad asd ddas a asd asdd dsadasdasd as da a das" />
          </Col>
          <Col md="6" lg="4" hiddenXsDown>
            <PostCard />
          </Col>
          <Col md="6" lg="4" hiddenXsDown>
            <PostCard />
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <ButtonWrapper>
            <LinkButton internal to="/">
              Więcej aktualności
            </LinkButton>
          </ButtonWrapper>
        </Col>
      </Row>
    </Container>
  </StyledSection>
);

export default News;
