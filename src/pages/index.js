import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "settings/GlobalStyle";
import SEO from "components/SEO";
import colors from "settings/colors";

import facebookIcon from "assets/images/facebook_icon.svg";
import messengerIcon from "assets/images/messenger_icon.svg";
import instagramIcon from "assets/images/instagram_icon.svg";
import youtubeIcon from "assets/images/youtube_icon.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 9em;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 0.1em;
  margin-bottom: 0.15em;
  position: relative;

  :after {
    content: "";
    display: block;
    position: absolute;
    width: 75%;
    left: 12.5%;
    height: 3px;
    background-color: ${colors.white};
  }
`;

const Icon = styled.img`
  width: 36px;
  height: auto;
  margin: 0 15px;
  transition: all 150ms ease-out;
  :hover {
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  font-size: 0.75em;
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  text-transform: uppercase;
`;

const IndexPage = () => (
  <>
    <Reset />
    <GlobalStyle />
    <SEO title="Idzie nowe" />
    <Wrapper>
      <>
        <Heading>Idzie nowe</Heading>
        <div>
          <a href="https://www.facebook.com/dobrapraktykazeglarska/">
            <Icon src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://m.me/dobrapraktykazeglarska/">
            <Icon src={messengerIcon} alt="Messenger" />
          </a>
          <a href="https://www.instagram.com/de_pe_zet/">
            <Icon src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCku8IcZT7gwCDSfonuduBew">
            <Icon src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </>
      <Footer>© Dobra Praktyka Żeglarska {new Date().getFullYear()}</Footer>
    </Wrapper>
  </>
);

export default IndexPage;
