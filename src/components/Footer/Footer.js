import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as P from "./partials";

import { ContactContext } from "components/PageLayout";
import colors from "utils/colors";

import logoMobile from "assets/images/logo_full_w.svg";
import logoDesktop from "assets/images/logo_w_vertical.svg";
import facebookIcon from "assets/images/facebook_w.svg";
import youtubeIcon from "assets/images/youtube_w.svg";
import instagramIcon from "assets/images/instagram_w.svg";
import messengerIcon from "assets/images/messenger_w.svg";
import sanityLogo from "assets/images/sanity-logo.svg";
import googleLogo from "assets/images/google-logo.svg";
import slackLogo from "assets/images/slack-logo.svg";
import get from "lodash.get";
import BlockContent from "components/BlockContent";

const waveOptions = {
  height: 100,
  amplitude: 20,
  speed: 0.1,
  points: 3,
};

const copyright = <p>© Dobra Praktyka Żeglarska {new Date().getFullYear()}</p>;

const supportedBy = (
  <>
    <div>We are proud to be supported by</div>
    <P.LogosWrapper>
      <a href="https://sanity.io" target="_blank" rel="noreferrer noopener">
        <img src={sanityLogo} alt="sanity.io" />
      </a>
      <a
        href="https://www.google.com/nonprofits/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={googleLogo} alt="Google for Non-profits" />
      </a>
      <a href="https://slack.com" target="_blank" rel="noreferrer noopener">
        <img src={slackLogo} alt="Slack" />
      </a>
    </P.LogosWrapper>
  </>
);

const Footer = () => {
  const response = useStaticQuery(graphql`
    query FooterQuery {
      allSanitySiteMetadata {
        nodes {
          socialMedia {
            facebook
            instagram
            messenger
            youtube
          }
          _rawCompanyData
        }
      }
    }
  `);

  const data = get(response, "allSanitySiteMetadata.nodes[0]", {});

  return (
    <ContactContext.Consumer>
      {({ setContactOpen }) => (
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
                    <BlockContent blocks={data._rawCompanyData} />
                    {copyright}
                  </P.MobileAddressWrapper>
                </Col>
                <Col className="hidden-md-down" md={3}>
                  <BlockContent blocks={data._rawCompanyData} />
                </Col>
                <Col className="hidden-md-down" md={6}>
                  <P.SocialMediaHeading>Social media</P.SocialMediaHeading>
                  <P.DesktopSocialLinksWrapper>
                    <P.DesktopSocialLink
                      url={data.socialMedia.facebook}
                      title="Facebook: Dobra Praktyka Żeglarska"
                      icon={facebookIcon}
                    />
                    <P.DesktopSocialLink
                      url={data.socialMedia.youtube}
                      title="Youtube: Dobra Praktyka Żeglarska"
                      icon={youtubeIcon}
                    />
                    <P.DesktopSocialLink
                      url={data.socialMedia.instagram}
                      title="Instagram: Dobra Praktyka Żeglarska"
                      icon={instagramIcon}
                    />
                    <P.DesktopSocialLink
                      url={data.socialMedia.messenger}
                      title="Messenger: Dobra Praktyka Żeglarska"
                      icon={messengerIcon}
                    />
                  </P.DesktopSocialLinksWrapper>
                  {copyright}
                  {supportedBy}
                </Col>
                <Col hiddenMdUp col={3}>
                  <P.MobileSocialLinksWrapper>
                    <P.MobileSocialLink
                      url={data.socialMedia.facebook}
                      title="Facebook: Dobra Praktyka Żeglarska"
                      icon={facebookIcon}
                    />
                    <P.MobileSocialLink
                      url={data.socialMedia.youtube}
                      title="Youtube: Dobra Praktyka Żeglarska"
                      icon={youtubeIcon}
                    />
                    <P.MobileSocialLink
                      url={data.socialMedia.instagram}
                      title="Instagram: Dobra Praktyka Żeglarska"
                      icon={instagramIcon}
                    />
                    <P.MobileSocialLink
                      url={data.socialMedia.messenger}
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
                        <P.FooterMenuLink to="/#dzialalnosc-klubu">
                          Działalność klubu
                        </P.FooterMenuLink>
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
                        <P.FooterMenuLink to="/produkty">
                          Produkty
                        </P.FooterMenuLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterMenuLink to="/blog">Blog</P.FooterMenuLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterMenuAnchorLink to="/#spiewnik">
                          Śpiewnik
                        </P.FooterMenuAnchorLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterMenuLink to="/#dolacz-do-nas">
                          Dołącz do nas
                        </P.FooterMenuLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterMenuLink to="/trudne-sprawy">
                          Trudne sprawy
                        </P.FooterMenuLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterContactLink
                          onClick={() => setContactOpen(true)}
                        >
                          Kontakt
                        </P.FooterContactLink>
                      </P.FooterMenuListItem>
                    </P.FooterMenuList>
                  </nav>
                </Col>
                <Col hiddenMdUp>{supportedBy}</Col>
                <Col hiddenMdUp>
                  <nav>
                    <P.FooterMenuList>
                      <P.FooterMenuListItem>
                        <P.FooterMenuLink to="/trudne-sprawy">
                          Trudne sprawy
                        </P.FooterMenuLink>
                      </P.FooterMenuListItem>
                      <P.FooterMenuListItem>
                        <P.FooterContactLink
                          onClick={() => setContactOpen(true)}
                        >
                          Kontakt
                        </P.FooterContactLink>
                      </P.FooterMenuListItem>
                    </P.FooterMenuList>
                  </nav>
                </Col>
              </Row>
            </Container>
          </P.FooterBody>
        </footer>
      )}
    </ContactContext.Consumer>
  );
};
export default Footer;
