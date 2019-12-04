import React from "react";
import PropTypes from "prop-types";

/**
 * A wrapper to ensure window global is available.
 * If it is - children are rendered, if not - returns null.
 */
const WindowCheck = ({ children }) => (
  <>{typeof window !== "undefined" ? children : null}</>
);

WindowCheck.defaultProps = {
  children: null,
};

WindowCheck.propTypes = {
  children: PropTypes.object,
};

export default WindowCheck;
