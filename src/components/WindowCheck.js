import React from "react";

/**
 * A wrapper to ensure window global is available.
 * If it is - children are rendered, if not - returns null.
 */
export default ({ children }) => (
  <>{typeof window !== "undefined" ? children : null}</>
);
