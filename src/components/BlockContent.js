import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import Img from "gatsby-image";
import get from "lodash.get";

const ImageWrapper = styled.div`
  margin: 1em 0;
`;

const inlineImageSerializer = ({ node, options }) => {
  const { projectId, dataset } = options;
  const fluid = getFluidGatsbyImage(
    get(node, "asset._ref"),
    { maxWidth: 1024 },
    {
      projectId,
      dataset,
    }
  );

  return (
    <ImageWrapper>
      <Img fluid={fluid} />
    </ImageWrapper>
  );
};

const serializers = {
  types: {
    inlineImage: inlineImageSerializer,
  },
};

const BlockContent = props => (
  <SanityBlockContent
    projectId="850bz552"
    dataset="production"
    {...props}
    serializers={{ ...serializers, ...props.serializers }}
  />
);

export default BlockContent;
