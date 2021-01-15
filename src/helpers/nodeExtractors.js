import capitalize from "helpers/capitalize";
import get from "lodash.get";

export const getSingleNode = (response, sanitySchemaName) =>
  get(
    response,
    `allSanity${capitalize(sanitySchemaName)}.nodes[0].content`,
    {}
  );
