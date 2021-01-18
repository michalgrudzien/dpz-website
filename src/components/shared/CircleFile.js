import React from "react";
import styled from "styled-components";

import Circle from "./Circle";
import colors from "utils/colors";

import iconImg from "assets/images/download_icon.svg";
import iconImgActive from "assets/images/download_icon--blue.svg";

const ExternalWrapper = styled.div`
  display: inline-block;
`;

const StyledCircle = styled(Circle)`
  position: relative;
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 auto 8px auto;
  background-image: url(${iconImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const FileLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  color: ${colors.white};
  text-decoration: none;

  ${({ dark }) =>
    dark &&
    `color: ${
      colors.primary
    }; ${Icon} {background-image: url(${iconImgActive});}`}

  :hover {
    color: ${colors.primary};
    ${Icon} {
      background-image: url(${iconImgActive});
    }
  }
`;

const Wrapper = styled.div`
  display: block;
  text-align: center;
`;

const Label = styled.span`
  font-size: 1rem;
  line-height: 1.2;
`;

const CircleFile = ({ url, label, dark, linkProps, className, ...rest }) => (
  <ExternalWrapper className={className}>
    <StyledCircle hoverable {...rest}>
      <FileLink
        href={url}
        dark={dark}
        target="_blank"
        rel="noreferrer noopener"
        {...linkProps}
      >
        <Wrapper>
          <Icon />
          <Label>{label}</Label>
        </Wrapper>
      </FileLink>
    </StyledCircle>
  </ExternalWrapper>
);

export default CircleFile;
