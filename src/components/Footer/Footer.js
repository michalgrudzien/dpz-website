import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Link } from "gatsby";
import * as P from "./paritals";

import colors from "utils/colors";

import logoMobile from "assets/images/logo_full_w.svg";
import logoDesktop from "assets/images/logo_w_vertical.svg";
import facebookIcon from "assets/images/facebook_w.svg";
import youtubeIcon from "assets/images/youtube_w.svg";
import instagramIcon from "assets/images/instagram_w.svg";
import messengerIcon from "assets/images/messenger_w.svg";

const waveOptions = {
  height: 100,
  amplitude: 20,
  speed: 0.1,
  points: 3,
};

const addressInfo = (
  <>
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
  </>
);

const copyright = <p>© Dobra Praktyka Żeglarska {new Date().getFullYear()}</p>;

const Footer = () => (
  <footer>
    <P.WavesWrapper>
      <P.TurqoiseWave
        fill={colors.turquoise}
        options={{ ...waveOptions, speed: 0.15, points: 3 }}
      />
      <P.DarkBlueWave fill={colors.darkBlue} options={waveOptions} />
    </P.WavesWrapper>
    <P.FooterBody>
      <Container>
        <Row>
          <Col col={9} md={3} lg={2}>
            <Link to="/">
              <P.LogoMobileImg
                src={logoMobile}
                alt="Dobra Praktyka Żeglarska"
              />
              <P.LogoDesktopImg
                src={logoDesktop}
                alt="Dobra Praktyka Żeglarska"
              />
            </Link>
            <P.MobileAddressWrapper>
              {addressInfo}
              {copyright}
            </P.MobileAddressWrapper>
          </Col>
          <Col className="hidden-md-down" md={3}>
            {addressInfo}
          </Col>
          <Col className="hidden-md-down" md={6}>
            <P.SocialMediaHeading>Social media</P.SocialMediaHeading>
            <P.DesktopSocialLinksWrapper>
              <P.DesktopSocialLink
                url="https://facebook.com/dobrapraktykazeglarska"
                title="Facebook: Dobra Praktyka Żeglarska"
                icon={facebookIcon}
              />
              <P.DesktopSocialLink
                url="https://www.youtube.com/channel/UCku8IcZT7gwCDSfonuduBew"
                title="Youtube: Dobra Praktyka Żeglarska"
                icon={youtubeIcon}
              />
              <P.DesktopSocialLink
                url="https://www.instagram.com/de_pe_zet/"
                title="Instagram: Dobra Praktyka Żeglarska"
                icon={instagramIcon}
              />
              <P.DesktopSocialLink
                url="https://m.me/dobrapraktykazeglarska"
                title="Messenger: Dobra Praktyka Żeglarska"
                icon={messengerIcon}
              />
            </P.DesktopSocialLinksWrapper>
            {copyright}
          </Col>
          <Col hiddenMdUp col={3}>
            <P.MobileSocialLinksWrapper>
              <P.MobileSocialLink
                url="https://facebook.com/dobrapraktykazeglarska"
                title="Facebook: Dobra Praktyka Żeglarska"
                icon={facebookIcon}
              />
              <P.MobileSocialLink
                url="https://www.youtube.com/channel/UCku8IcZT7gwCDSfonuduBew"
                title="Youtube: Dobra Praktyka Żeglarska"
                icon={youtubeIcon}
              />
              <P.MobileSocialLink
                url="https://www.instagram.com/de_pe_zet/"
                title="Instagram: Dobra Praktyka Żeglarska"
                icon={instagramIcon}
              />
              <P.MobileSocialLink
                url="https://m.me/dobrapraktykazeglarska"
                title="Messenger: Dobra Praktyka Żeglarska"
                icon={messengerIcon}
              />
            </P.MobileSocialLinksWrapper>
          </Col>
        </Row>
        <Row>
          <Col className="hidden-md-down">
            <nav>
              <P.FooterMenuList>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/">Home</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/o-nas">O nas</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/">Rejs z DPŻ</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/rejsy/dpz-world-tour">
                    DPŻ World Tour
                  </P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/rejsy/dpz-we-shall-sea">
                    DPŻ We Shall Sea
                  </P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/produkty">Produkty</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/blog">Blog</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/">Śpiewnik</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/">Dołącz do nas</P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/trudne-sprawy">
                    Trudne sprawy
                  </P.FooterMenuLink>
                </P.FooterMenuListItem>
                <P.FooterMenuListItem>
                  <P.FooterMenuLink to="/">Kontakt</P.FooterMenuLink>
                </P.FooterMenuListItem>
              </P.FooterMenuList>
            </nav>
          </Col>
        </Row>
      </Container>
    </P.FooterBody>
  </footer>
);

export default Footer;
