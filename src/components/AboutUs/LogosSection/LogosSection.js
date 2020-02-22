import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Fade from "react-reveal/Fade";
import Section from "shared/Section";
import * as P from "./parts";
import * as A from "../../../assets/images";

const LogosSection = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col col={12}>
            <Fade>
              <P.Wrapper>
                <P.Logos src={A.Logos} alt={"DPŻ"} />
              </P.Wrapper>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <Fade>
              <P.Wrapper>
                <P.StyledContentText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                </P.StyledContentText>
              </P.Wrapper>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <Fade>
              <P.ColorsWrapper>
                <P.ColorImg src={A.ColorDarkBlue} alt={"Color"} />
                <P.ColorImg src={A.ColorTurquoise} alt={"Color"} />
                <P.ColorImg src={A.ColorGradient} alt={"Color"} />
                <P.ColorImg src={A.ColorDarkGrey} alt={"Color"} />
              </P.ColorsWrapper>
              <P.Wrapper>
                <P.FontImg src={A.FontPoppins} alt={"Font"} />
                <P.FontImg src={A.FontBebas} alt={"Font"} />
              </P.Wrapper>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <Fade>
              <P.Card>
                <P.Img src={A.CardItem1} alt={"DPŻ"} />
              </P.Card>
            </Fade>
            <Fade>
              <P.Card>
                <P.Img src={A.CardItem2} alt={"DPŻ"} />
              </P.Card>
            </Fade>
            <Fade>
              <P.Card>
                <P.Img src={A.CardItem3} alt={"DPŻ"} />
              </P.Card>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col col={12}>
            <Fade>
              <P.FooterContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt
                mollit anim id est laborum.
              </P.FooterContentText>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default LogosSection;