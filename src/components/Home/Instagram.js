import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Helmet from "react-helmet";

import instagramBgImg from "assets/images/instagram_bg.svg";
import colors from "utils/colors";

const Wrapper = styled.section`
  margin: 2em 0;
  background-image: url(${instagramBgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 115%;
`;

const AccountInfoWrapper = styled.div`
  margin-top: 2em;

  ${media.lg`
    text-align: right;
  `}
`;

const AccountLink = styled.a`
  display: block;
  font-size: 3em;
  color: ${colors.primary};
  font-family: "Bebas Neue";
  text-decoration: none;
`;

const Hashtags = styled.div`
  margin: 2em 0;
`;

const HashtagLink = styled.a`
  font-family: "Bebas Neue";
  text-decoration: none;
  color: ${colors.secondary};
  font-size: 2em;

  :hover {
    color: ${colors.primary};
  }
`;

const Instagram = () => (
  <>
    <Helmet>
      <script
        src="https://cdn2.woxo.tech/a.js#5ff837c3f085560015c3ae14"
        async
        data-usrc
      />
    </Helmet>
    <Wrapper>
      <Container>
        <Row>
          <Col lg="5" md="4" mdOrder="last">
            <AccountInfoWrapper>
              <AccountLink
                href="https://www.instagram.com/de_pe_zet/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @_de_pe_zet
              </AccountLink>
              <Hashtags>
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzworldtour/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzworldtour
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzweshallsea/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzweshallsea
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/nosdpz/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #nosdpz
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzspozycie/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzspozycie
                </HashtagLink>
              </Hashtags>
            </AccountInfoWrapper>
          </Col>
          <Col lg="5" md="8" lgOffset="1">
            <div data-mc-src="1914e0cb-38e9-4177-ad88-6b5ce7c61a6d" />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default Instagram;
