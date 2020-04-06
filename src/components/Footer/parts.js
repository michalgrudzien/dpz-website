import styled, { css } from "styled-components";
import colors from "utils/colors";
import { ContentText, Subtitle } from "../../shared/Typography";

export const Footer = styled.footer`
  background: ${colors.darkBlue};
  padding: 30px 0;
`;

export const Wrapper = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
`;

export const Icon = styled.img`
  height: 90px;
`;

export const StyledSubtitle = styled(Subtitle)`
  margin-left: 20px;
  font-size: 32px;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 230px;
  justify-content: space-between;
`;

export const SocialLink = styled.a``;

export const SocialIcon = styled.img`
  width: 38px;
`;

export const ContactWrapper = styled(ContentText)`
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const CredentialsWrapper = styled(ContentText)`
  color: ${colors.white};
`;
