import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import SocialLink from "components/shared/SocialLink";
import Button from "components/shared/Button";
import colors from "utils/colors";
import { boxShadow } from "utils/styles";

import tickIconImg from "assets/images/tick_icon.svg";
import closeIconImg from "assets/images/close_icon.svg";
import closeIconImgW from "assets/images/close_icon_w.svg";

export const Wrapper = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index 1200;
pointer-events: none;
overflow: hidden;

${({ isOpen }) =>
  isOpen &&
  `
  overflow: auto;
  pointer-events: all;
`};

${media.md`
  display: flex;
`}
`;

export const Header = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1200;
  background-color: ${colors.darkBlue};
  padding: 3em 2em;
  transform: translate(0, -102%);
  transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);
  ${boxShadow};

  h2,
  p {
    color: ${colors.white};
  }
  h2 {
    margin-top: 0;
  }

  ${media.md`
    width: 33%;
    transform: translate(-100%, 0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`}

  ${({ isOpen }) =>
    isOpen &&
    `
&{
  transform: translate(0, 0)
}
`}
`;

export const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 3em 2em;
  background-color: ${colors.white};
  transform: translate(0, -200%);
  transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);

  ${media.md`
    padding: 6em 4em;
    width: 67%;
    min-height: 100%;
    transform: translate(-200%, 0);
`}

  ${({ isOpen }) =>
    isOpen &&
    `
&{
  transform: translate(0, 0);
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1) 50ms;
}
`}
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-size: cover;
  background-color: transparent;
  background-image: url(${closeIconImgW});
  opacity: 0;
  transition: opacity 200ms ease-out;
  cursor: pointer;

  position: absolute;
  z-index: 1250;

  top: 1em;
  right: 1.5em;

  :focus {
    outline: none;
  }

  ${media.md`
    background-image: url(${closeIconImg});
    width: 40px;
    height: 40px;
    top: 2em;
    right: 2.5em;
  `}

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    transition: opacity 200ms ease-out 500ms;
  `}
`;

export const SocialIconsWrapper = styled.div`
  margin-top: 4em;
  display: flex;
  justify-content: flex-end;

  ${media.md`
    margin-top: 1em;
    justify-content: center;
  `}
`;

export const ContactSocialLink = styled(SocialLink)`
  margin-left: 1em;

  ${media.md`
    margin: 0 0.5em;
  `}
`;

export const FormControl = styled.div`
  display: block;
  position: relative;
  margin-bottom: 3em;
  &::after {
    display: block;
    content: "";
    width: 1.25em;
    height: 1.25em;
    background-image: url(${tickIconImg});
    background-size: cover;
    position: absolute;
    right: 5px;
    top: 5px;
    transition: all 100ms ease-out;
    opacity: 0;
    transform: translateY(-5px);
  }

  ${({ valid }) =>
    valid &&
    `
    &::after{
        opacity: 1;
        transform: none;
    }
  `}
`;

export const ErrorLabel = styled.span`
  color: ${colors.red};
  display: inline-block;
  font-size: 0.85rem;
  padding: 1em;
`;

export const SubmitButton = styled(Button)`
  width: 100%;

  ${media.md`
    width: auto;
    float: right;
  `}
`;

export const AgreementText = styled.small`
  display: inline-block;
  margin-bottom: 1.5em;
  line-height: 1.35;
`;

export const ErrorText = styled.small`
  display: inline-block;
  margin-top: 1em;
  color: ${colors.red};
  line-height: 1.35;
`;

export const LoaderWrapper = styled.div`
  min-height: 400px;
  margin: 4em 0;
  display: flex;
  justify-content: space-around;
`;

export const SuccessButton = styled(Button)`
  margin-top: 1em;
  width: 100%;

  ${media.md`
        width: auto;
        float: right;
    `}
`;
