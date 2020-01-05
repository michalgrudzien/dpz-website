import React from "react";
import PropTypes from "prop-types";
import * as P from "./parts";

const Section = ({ children, className }) => {
  return (
    <P.Wrapper className={className}>
      {children}
    </P.Wrapper>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};