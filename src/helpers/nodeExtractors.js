import get from "lodash.get";

export const getHomepageSingleNode = response =>
  get(response, "allSanityHomepage.nodes[0].content", {});
