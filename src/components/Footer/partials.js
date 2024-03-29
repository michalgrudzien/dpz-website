import styled, { css } from "styled-components";
import { media } from "styled-bootstrap-grid";
import Wave from "react-wavify";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import colors from "utils/colors";

import SocialLink from "components/shared/SocialLink";

export const FooterBody = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding: 0.5em 0 2em;
  font-size: 0.75em;

  .hidden-md-down {
    display: none;
  }

  ${media.md`
    padding: 2em 0 2em;

    .hidden-md-down {
        display: block;
    }
  `}
`;

export const WavesWrapper = styled.div`
  height: 80px;

  position: relative;
  top: 5px;
  overflow: hidden;
`;

export const TurqoiseWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

export const DarkBlueWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

export const LogoMobileImg = styled.img`
  width: 180px;
  margin-bottom: 2em;

  ${media.md`
    display: none;
  `}
`;

export const LogoDesktopImg = styled.img`
  width: 100px;
  display: none;

  ${media.md`
    display: block;
  `}
`;

export const MobileSocialLinksWrapper = styled.div`
  margin: 2.5em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.md`
    display: none;
  `}
`;

export const MobileSocialLink = styled(SocialLink)`
  margin-bottom: 1.5em;
`;

export const MobileAddressWrapper = styled.div`
  ${media.md`
    display: none;
  `}
`;

export const SocialMediaHeading = styled.h2`
  color: ${colors.white};
  font-family: "Bebas Neue", sans-serif;
  margin-top: 0;
`;

export const DesktopSocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const DesktopSocialLink = styled(SocialLink)`
  margin-right: 1.2em;
`;

export const FooterMenuList = styled.ul`
  display: flex;
  width: 100%;

  ${media.md`
  margin-top: 2em;
    max-width: 820px;
    justify-content: space-between;
  `}
`;

export const FooterMenuListItem = styled.li`
  display: inline-block;
  margin-right: 2em;

  ${media.md`
    margin-right: 0;
  `}
`;

const footerLinkStyles = css`
  color: ${colors.white};

  :hover {
    text-decoration: none;
  }
`;

export const FooterMenuLink = styled(Link)`
  ${footerLinkStyles};
`;

export const FooterMenuAnchorLink = styled(AnchorLink)`
  ${footerLinkStyles};
`;

export const FooterContactLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  cursor: pointer;

  :hover {
    text-decoration: none;
  }
`;

export const LogosWrapper = styled.div`
  margin: 1em 0 0.5em;

  img {
    margin: 0 10px 10px 0;
    width: 100px;
  }
`;
