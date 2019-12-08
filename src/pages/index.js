import React from "react";
import { Reset } from "styled-reset";

import GlobalStyle from "settings/GlobalStyle";
import PageLayout from "components/PageLayout";

const IndexPage = () => (
  <>
    <Reset />
    <GlobalStyle />
    <PageLayout colorTheme="light" />
  </>
);

export default IndexPage;
