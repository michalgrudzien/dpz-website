import isWindowDefined from "helpers/isWindowDefined";

const IndexPage = () =>
  isWindowDefined() && window.location.replace("/rejsy/dpz-world-tour");

export default IndexPage;
