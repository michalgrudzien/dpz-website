import React from "react";

import Portal from "components/Portal";
import { ContactContext } from "components/PageLayout";

import * as P from "./partials";

const Contact = () => (
  <Portal>
    <ContactContext.Consumer>
      {({ isContactOpen, setContactOpen }) => (
        <P.Wrapper isOpen={isContactOpen}>
          <P.CloseButton
            isOpen={isContactOpen}
            onClick={() => setContactOpen(false)}
          />
          <P.Header isOpen={isContactOpen}>
            <h2>Skontaktuj się z nami!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </P.Header>
          <P.Content isOpen={isContactOpen}>content</P.Content>
        </P.Wrapper>
      )}
    </ContactContext.Consumer>
  </Portal>
);

export default Contact;
