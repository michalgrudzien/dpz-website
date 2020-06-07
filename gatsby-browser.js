import React from "react";

import { ContactContext } from "components/PageLayout";

export const wrapRootElement = ({ element }) => (
  <ContactContext.Provider>{element}</ContactContext.Provider>
);
