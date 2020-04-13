import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Wave from "react-wavify";
import { Link } from "gatsby";

import colors from "utils/colors";

import logoMobile from "assets/images/logo_full_w.svg";
import facebookIcon from "assets/images/facebook_w.svg";
import youtubeIcon from "assets/images/youtube_w.svg";
import instagramIcon from "assets/images/instagram_w.svg";
import messengerIcon from "assets/images/messenger_w.svg";

import SocialLink from "./SocialLink";

const FooterBody = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding: 0.5em 0 2em;
`;

const waveOptions = {
  height: 100,
  amplitude: 20,
  speed: 0.1,
  points: 3,
};

const WavesWrapper = styled.div`
  height: 80px;

  position: relative;
  top: 5px;
  overflow: hidden;
`;

const TurqoiseWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const DarkBlueWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

const LogoMobileImg = styled.img`
  width: 180px;
  margin-bottom: 2em;
`;

const MobileSocialLinksWrapper = styled.div`
  margin: 2.5em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MobileSocialLink = styled(SocialLink)`
  margin-bottom: 1.5em;
`;

const Footer = () => (
  <footer>
    <WavesWrapper>
      <TurqoiseWave
        fill={colors.turquoise}
        options={{ ...waveOptions, speed: 0.15, points: 3 }}
      />
      <DarkBlueWave fill={colors.darkBlue} options={waveOptions} />
    </WavesWrapper>
    <FooterBody>
      <Container>
        <Row>
          <Col col={9}>
            <Link to="/">
              <LogoMobileImg src={logoMobile} alt="Dobra Praktyka Żeglarska" />
            </Link>
            <p>
              Stowarzyszenie
              <br />
              Dobra Praktyka Żeglarska <br />
              ul. Dworska 23/21 <br />
              30-314 Kraków
            </p>
            <p>
              NIP: 12345678
              <br /> REGON: 12345678
              <br /> KRS: 12345678
            </p>
            <p>© Dobra Praktyka Żeglarska {new Date().getFullYear()}</p>
          </Col>
          <Col col={3}>
            <MobileSocialLinksWrapper>
              <MobileSocialLink
                url="https://facebook.com/dobrapraktykazeglarska"
                title="Facebook: Dobra Praktyka Żeglarska"
                icon={facebookIcon}
              />
              <MobileSocialLink
                url="https://www.youtube.com/channel/UCku8IcZT7gwCDSfonuduBew"
                title="Youtube: Dobra Praktyka Żeglarska"
                icon={youtubeIcon}
              />
              <MobileSocialLink
                url="https://www.instagram.com/de_pe_zet/"
                title="Instagram: Dobra Praktyka Żeglarska"
                icon={instagramIcon}
              />
              <MobileSocialLink
                url="https://m.me/dobrapraktykazeglarska"
                title="Messenger: Dobra Praktyka Żeglarska"
                icon={messengerIcon}
              />
            </MobileSocialLinksWrapper>
          </Col>
        </Row>
      </Container>
    </FooterBody>
  </footer>
);

export default Footer;
