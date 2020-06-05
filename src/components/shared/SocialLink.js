import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.855, -0.41, 0.275, 1.65);

  :hover {
    transform: scale(1.1);
  }
`;

const StyledIcon = styled.img`
  width: 32px;
`;

const SocialLink = ({ url, icon, title, className }) => (
  <StyledLink
    className={className}
    href={url}
    title={title}
    target="_blank"
    rel="noreferrer noopener"
  >
    <StyledIcon src={icon} alt={title} />
  </StyledLink>
);

export default SocialLink;
