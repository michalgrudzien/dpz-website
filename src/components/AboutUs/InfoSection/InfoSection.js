import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Title, Subtitle, ContentText } from "shared/Typography";
import Section from "shared/Section";
import * as P from "./parts";

const InfoSection = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col col={12}>
            <P.HeaderWrapper>
              <P.TitleWrapper>
                <Subtitle>Stowarzyszenie</Subtitle>
                <Title> Dobra Praktyka Żeglarska</Title>
              </P.TitleWrapper>
              <P.CircleWrapper>
                <P.StyledCircleItem number={26}>
                  członków
                </P.StyledCircleItem>
              </P.CircleWrapper>
            </P.HeaderWrapper>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <P.StyledCard>
              <P.StyledContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt
                mollit anim id est laborum.
              </P.StyledContentText>
            </P.StyledCard>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default InfoSection;