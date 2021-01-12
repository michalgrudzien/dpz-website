import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import { Link } from "gatsby";

import colors from "utils/colors";

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 4em;
  margin: 0.5em 0 0;
`;

const Subtitle = styled.h2`
  margin-top: 0;
  color: ${colors.secondary};
  a {
    color: ${colors.secondary};

    :hover {
      color: ${colors.primary};
    }
  }
`;

const Heading = ({ title, subtitle, className }) => (
  <div className={className}>
    <Container>
      <Row>
        <Col>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Heading;
