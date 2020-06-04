import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import CircleNumber from "components/shared/CircleNumber";

const Wrapper = styled.div`
  padding: 2em 0 3em;
`;

const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;

  ${media.md`
  grid-template-columns: auto auto auto;
  `}

  ${media.lg`
  grid-template-columns: auto auto auto auto auto auto;
  `}
`;

const NumberWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TourNumbers = ({ numbers }) => (
  <Wrapper>
    <NumbersGrid>
      {numbers.map(({ number, label }) => (
        <NumberWrapper>
          <CircleNumber number={number} label={label} />
        </NumberWrapper>
      ))}
    </NumbersGrid>
  </Wrapper>
);

export default TourNumbers;
