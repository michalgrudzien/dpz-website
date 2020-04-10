import React from "react";
import PropTypes from "prop-types";
import * as P from "./parts";

const Card = ({ children, className }) => {
  return (
    <P.Wrapper className={className}>
      {children}
    </P.Wrapper>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};