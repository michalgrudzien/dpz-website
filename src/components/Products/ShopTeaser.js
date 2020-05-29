import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import LinkButton from "components/shared/LinkButton";
import colors from "utils/colors";

const Wrapper = styled.div`
  background: ${colors.gradient};
  color: ${colors.white};
  position: relative;
  bottom: -64px;
  padding: 4em 0 92px 0;

  h1 {
    color: ${colors.white};
  }
`;

const ShopButton = styled(LinkButton)`
  margin-top: 2em;
  width: 100%;

  ${media.md`
  float: right;
  width: auto;
`}
`;

const ShopTeaser = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col md="8">
          <h1>Podoba się? No to zamów!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Col>
        <Col md="12">
          <ShopButton>Przejdź do zamawialni</ShopButton>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default ShopTeaser;
