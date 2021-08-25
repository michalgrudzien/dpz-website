import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import LinkButton from "components/shared/LinkButton";
import colors from "utils/colors";
import BlockContent from "components/BlockContent";

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

const ShopTeaser = ({ title, body }) => (
  <Wrapper>
    <Container>
      <Row>
        <Col md="8">
          <h1>{title}</h1>
          <BlockContent blocks={body} />
        </Col>
        <Col md="12">
          <ShopButton href="https://zamow.depezet.com">
            Przejdź do zamawialni
          </ShopButton>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default ShopTeaser;
