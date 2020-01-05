import React from "react";
import PropTypes from "prop-types";
import * as P from "./parts";

export const Title = ({ children, className }) => {
  return (
    <P.Title className={className}>
      {children}
    </P.Title>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export const Subtitle = ({ children, white, className }) => {
  return (
    <P.Subtitle white={white} className={className}>
      {children}
    </P.Subtitle>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
};

export const ContentText = ({ children, white, className }) => {
  return (
    <P.ContentText white={white} className={className}>
      {children}
    </P.ContentText>
  );
};

ContentText.propTypes = {
  children: PropTypes.node,
};

