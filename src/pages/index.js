import React from "react";
import { Reset } from "styled-reset";
import GlobalStyle from "settings/GlobalStyle";
import SEO from "components/SEO";

const IndexPage = () => (
  <>
    <Reset />
    <GlobalStyle />
    <SEO title="Idzie nowe" />
    <p>ELO</p>
    <h1>IDZIE NOWE</h1>
  </>
);

export default IndexPage;
