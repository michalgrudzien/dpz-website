import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import * as P from "./parts";
import * as A from "../../assets/images";
import { socials } from "./data";


const socialsArr = socials.map((item, i) => (
  <P.SocialLink href={item.link} key={i}>
    <P.SocialIcon src={item.icon} alt={item.name} />
  </P.SocialLink>
));

const Footer = () => {
  return (
    <P.Footer>
      <Container>
        <Row>
          <Col col md={10}>
            <P.Wrapper>
              <P.LogoWrapper>
                <P.Icon src={A.LogoWhite} />
                <P.StyledSubtitle white>
                  Dobra praktyka<br />
                  żeglarska
                </P.StyledSubtitle>
              </P.LogoWrapper>
              <P.ContactWrapper>
                Stowarzyszenie<br />
                Dobra Praktyka Żeglarska<br />
                ul. Dworska 23/21<br />
                30-314 Kraków
              </P.ContactWrapper>
              <P.ContactWrapper>
                NIP: 123456789<br />
                REGON: 123456789<br />
                KRS: 123456789<br />
              </P.ContactWrapper>
            </P.Wrapper>
          </Col>
          <Col col md={2}>
            <P.SocialsWrapper>
              {socialsArr}
            </P.SocialsWrapper>
          </Col>
        </Row>
        <Row>
          <Col col lg={12}>
            <P.CredentialsWrapper>
              © Dobra Praktyka Żeglarska {new Date().getFullYear()}
            </P.CredentialsWrapper>
          </Col>
        </Row>
      </Container>
    </P.Footer>
  );
};

Footer.propTypes = {};

export default Footer;
