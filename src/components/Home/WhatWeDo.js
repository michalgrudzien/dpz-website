import React from "react";
import { Col, Container, Row, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import colors from "utils/colors";
import bulletImg from "assets/images/list_bullet.svg";
import boatImg from "assets/images/boat.svg";

const Section = styled.section`
  margin: 4em 0;
`;

const Wrapper = styled.div`
  padding: 4em 0 180px;
  background-color: rgba(${colors.rgb.turquoise}, 0.075);
  color: ${colors.secondary};
  overflow: hidden;
  position: relative;

  ${media.lg`
    padding: 4em 0 232px;
  `}
`;

const Title = styled.h1`
  color: ${colors.primary};
`;

const List = styled.ul`
  margin: 2em 0 2em 32px;
  list-style-image: url(${bulletImg});

  ${media.lg`
    display: grid;
    grid-column-gap: 36px;
    grid-template-columns: auto auto;
  `}
`;

const ListItem = styled.li`
  line-height: 1.33;
  margin-bottom: 2em;
`;

const ListItemTitle = styled.span`
  display: inline-block;
  position: relative;
  top: -8px;
  font-family: "Bebas Neue Bold";
  font-size: 1.5em;
  padding: 0 8px;
`;

const ListItemText = styled.span`
  display: inline-block;
  padding: 0 8px;
  font-size: 0.85em;
`;

const Subtitle = styled.h2`
  font-size: 2em;
`;

const BoatImg = styled.img`
  display: none;

  ${media.lg`
    height: 720px;
    position: absolute;
    display: block;
    top: 48px;
    right: -80px;
  `}
`;

const WhatWeDo = ({ isOnMobile }) => (
  <Section>
    <Wrapper>
      <Parallax disabled={isOnMobile} x={[5, 0]}>
        <BoatImg src={boatImg} />
      </Parallax>
      <Container>
        <Row>
          <Col lg="8">
            <Title>Działalność klubu i&nbsp;nasze cele</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="8">
            <List>
              <ListItem>
                <ListItemTitle>Popularyzacja żeglarstwa</ListItemTitle>
                <ListItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemTitle>Popularyzacja żeglarstwa</ListItemTitle>
                <ListItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemTitle>Popularyzacja żeglarstwa</ListItemTitle>
                <ListItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemTitle>Popularyzacja żeglarstwa</ListItemTitle>
                <ListItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemTitle>Popularyzacja żeglarstwa</ListItemTitle>
                <ListItemText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </ListItemText>
              </ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Subtitle>Lorem ipsum? lorem ipsum</Subtitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </Section>
);

export default WhatWeDo;
