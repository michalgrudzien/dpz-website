import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Subtitle, ContentText } from "shared/Typography";
import * as A from "assets/images";
import * as P from "./parts";
import { resolutions } from "./data";

const resultionsArr = resolutions.map((item, i) => (
  <P.StyledLink to={item.link} key={i}>
    <P.ListItem>
      <P.Icon src={item.icon} />
      <P.Title>{item.name}</P.Title>
    </P.ListItem>
  </P.StyledLink>
));

const StatuteSection = () => {
  return (
    <P.StyledSection>
      <Container>
        <Row>
          <Col col={12}>
            <Subtitle white>
              Statut
            </Subtitle>
            <ContentText white>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
            </ContentText>
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
        <Row>
          <Col col={12}>
            <Subtitle white>
              Podjęte uchwały
            </Subtitle>
            <P.List>
              {resultionsArr}
            </P.List>
          </Col>
        </Row>
      </Container>
    </P.StyledSection>
  );
};

export default StatuteSection;