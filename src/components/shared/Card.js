import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

import { boxShadow } from "utils/styles";
import colors from "utils/colors";

const Wrapper = styled.div`
    ${boxShadow}
    background-color: ${colors.white};

    padding: 15px;

    ${media.md`
        padding: 40px;
    `}
`;

const Card = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default Card;
