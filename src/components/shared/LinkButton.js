import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { buttonStyles } from "components/shared/Button";

const LinkButton = ({ internal, children, ...props }) => {
  const StyledElement = styled(internal ? Link : "a")`
    ${buttonStyles};
  `;

  return <StyledElement {...props}>{children}</StyledElement>;
};

export default LinkButton;
