import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Fade from "react-reveal/Fade";
import { ContentText, Subtitle } from "shared/Typography";
import * as A from "assets/images";
import * as P from "./parts";
import { resolutions } from "./data";

const resultionsArr = resolutions.map((item, i) => (
  <Col md={6} sm={12} key={i}>
    <P.StyledLink to={item.link}>
      <P.ListItem>
        <P.Icon src={item.icon} />
        <P.Content>{item.name}</P.Content>
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
            <Fade>
              <Subtitle white>
                Statut
              </Subtitle>
            </Fade>
            <Fade>
              <ContentText white>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
              </ContentText>
            </Fade>
          </Col>
          <Col lg={4}>
            <P.CircleItemWrapper>
              <P.StyledCircleLink to={"/"}>
                <P.StyledCircleItem
                  icon={A.DownloadIcon}
                  activeIcon={A.DownloadIconBlue}
                >
                  Statut
                  <br />
                  Stowarzyszenia
                </P.StyledCircleItem>
              </P.StyledCircleLink>
            </P.CircleItemWrapper>
          </Col>
        </Row>
        <Fade>
          <P.StyledSubtitle white>
            Podjęte uchwały
          </P.StyledSubtitle>
        </Fade>
        <P.List>
          <Fade>
            <Row>
              {resultionsArr}
            </Row>
          </Fade>
        </P.List>
        <P.ScrollDownWrapper>
          <P.TinySubtitle>
            Logo i barwy klubowe
          </P.TinySubtitle>
          <P.ArrowDown />
        </P.ScrollDownWrapper>
      </Container>
    </P.StyledSection>
  );
};

export default StatuteSection;