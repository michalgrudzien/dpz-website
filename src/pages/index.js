import React from "react";
import { Reset } from "styled-reset";

import GlobalStyle from "settings/GlobalStyle";

import UnderConstruction from "components/UnderConstruction";

const IndexPage = () => (
  <>
    <Reset />
    <GlobalStyle />
    <UnderConstruction />
  </>
);

export default IndexPage;
