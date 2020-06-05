import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import colors from "utils/colors";
import { boxShadow } from "utils/styles";

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
  transform: translate(0, -100%);
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
  background-color: ${colors.white};
  height: 600px;
  transform: translate(0, -200%);
  transition: all 400ms cubic-bezier(0.86, 0, 0.07, 1);

  ${media.md`
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
