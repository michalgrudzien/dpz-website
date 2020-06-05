import React from "react";
import styled from "styled-components";

import Portal from "components/Portal";
import { ContactContext } from "components/PageLayout";

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index 1200;
    background-color: darkred;
`;

const Contact = () => (
  <Portal>
    <ContactContext.Consumer>
      {({ isContactOpen }) => <>{isContactOpen && <Wrapper />}</>}
    </ContactContext.Consumer>
  </Portal>
);

export default Contact;
