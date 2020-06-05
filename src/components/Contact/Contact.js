import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import Portal from "components/Portal";
import { ContactContext } from "components/PageLayout";

import colors from "utils/colors";
import { boxShadow } from "utils/styles";

const Wrapper = styled.div`
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

const Header = styled.div`
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

const Content = styled.div`
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

const Contact = () => (
  <Portal>
    <ContactContext.Consumer>
      {({ isContactOpen, setContactOpen }) => (
        <Wrapper isOpen={isContactOpen}>
          <Header isOpen={isContactOpen}>
            <button onClick={() => setContactOpen(false)}>close</button>
            <h2>Skontaktuj się z nami!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Header>
          <Content isOpen={isContactOpen}>content</Content>
        </Wrapper>
      )}
    </ContactContext.Consumer>
  </Portal>
);

export default Contact;
