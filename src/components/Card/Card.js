import React from "react";
import PropTypes from "prop-types";
import * as P from "./parts";

const Card = ({ children }) => {
  return (
    <P.Wrapper>
        {children}
    </P.Wrapper>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};