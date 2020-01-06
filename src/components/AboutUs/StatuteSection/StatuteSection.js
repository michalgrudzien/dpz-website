import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Subtitle, ContentText } from "shared/Typography";
import * as A from "assets/images";
import * as P from "./parts";
import { resolutions } from "./data";

const resultionsArr = resolutions.map((item, i) => (
  <Col lg={6} md={12}>
    <P.StyledLink to={item.link} key={i}>
      <P.ListItem>
        <P.Icon src={item.icon} />
        <P.Title>{item.name}</P.Title>
      </P.ListItem>
    </P.StyledLink>
  </Col>
));

const StatuteSection = () => {
  return (
    <P.StyledSection>
      <Container>
        <Row>
          <Col lg={8}>
            <Subtitle white>
              Statut
            </Subtitle>
            <ContentText white>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </ContentText>
          </Col>
          <Col lg={4}>
            <P.CircleItemWrapper>
              <P.StyledCircleLink to={"/"}>
                <P.StyledCircleItem icon={A.DownloadIcon} activeIcon={A.DownloadIconBlue}>
                  Statut
                  <br />
                  Stowarzyszenia
                </P.StyledCircleItem>
              </P.StyledCircleLink>
            </P.CircleItemWrapper>
          </Col>
        </Row>
        <Subtitle white>
          Podjęte uchwały
        </Subtitle>
        <P.List>
          <Row>
            {resultionsArr}
          </Row>
        </P.List>
      </Container>
    </P.StyledSection>
  );
};

export default StatuteSection;