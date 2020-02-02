import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Fade from "react-reveal/Fade";
import { Title, Subtitle } from "shared/Typography";
import Section from "shared/Section";
import * as P from "./parts";

const InfoSection = () => {
  return (
    <Section>
      <Fade>
        <P.HeaderWrapper>
          <Container>
            <Row>
              <Col col lg={12} sm={8} xs={6}>
                <P.TitleWrapper>
                  <Subtitle>Stowarzyszenie</Subtitle>
                  <Title> Dobra Praktyka Żeglarska</Title>
                </P.TitleWrapper>
              </Col>
              <Col col lgOffset={1} lg={10} sm={4} xs={6}>
                <P.StyledCircleItem number={26}>
                  członków
                </P.StyledCircleItem>
              </Col>
            </Row>
          </Container>
        </P.HeaderWrapper>
      </Fade>
      <Container>
        <Row>
          <Col col={12}>
            <Fade>
              <P.StyledCard>
                <P.StyledContentText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt
                  mollit anim id est laborum.
                </P.StyledContentText>
              </P.StyledCard>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default InfoSection;