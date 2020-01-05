import React from "react";
import PropTypes from "prop-types";
import * as P from "./parts";

export const Title = ({ children }) => {
  return (
    <P.Title>
      {children}
    </P.Title>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export const Subtitle = ({ children, white }) => {
  return (
    <P.Subtitle white={white}>
      {children}
    </P.Subtitle>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
};

export const ContentText = ({ children, white }) => {
  return (
    <P.ContentText white={white}>
      {children}
    </P.ContentText>
  );
};

ContentText.propTypes = {
  children: PropTypes.node,
};

