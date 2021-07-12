import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import get from "lodash.get";
import SanityBlockContent from "@sanity/block-content-to-react";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import YouTubeEmbed from "react-youtube-embed";
import Slider from "components/shared/Slider";

import { portableTextStyles } from "utils/styles";

const ImageWrapper = styled.div`
  margin: 1em 0;
`;

const StylingWrapper = styled.div`
  ${portableTextStyles};
`;

const EmbedWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;

  //Overwriting instagram iframe min-width
  iframe {
    min-width: 0 !important;
  }
`;

const YoutubeWrapper = styled.div`
  margin: 1em 0;
  border-radius: 1em;
  overflow: hidden;
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

const htmlEmbedSerializer = ({ node: { code } }) => (
  <EmbedWrapper
    dangerouslySetInnerHTML={{
      __html: code,
    }}
  />
);

const youtubeSerializer = ({ node: { url } }) => {
  return (
    <YoutubeWrapper>
      <YouTubeEmbed id={url} />
    </YoutubeWrapper>
  );
};

const gallerySerializer = ({ node, options }) => {
  const { projectId, dataset } = options;
  const fixedImages = node.images.map(
    (image) =>
      getFixedGatsbyImage(
        get(image, "asset._ref"),
        { width: 1024 },
        {
          projectId,
          dataset,
        }
      ).src
  );
  console.log(fixedImages);
  return <Slider gallery={fixedImages} />;
};

const serializers = {
  types: {
    inlineImage: inlineImageSerializer,
    htmlEmbed: htmlEmbedSerializer,
    youtubeBlock: youtubeSerializer,
    gallery: gallerySerializer,
  },
  marks: {
    internalLink: ({ children, mark: { url } }) => (
      <Link to={url}>{children}</Link>
    ),
    externalLink: ({ children, mark: { url, newTab } }) => (
      <a
        href={url}
        target={newTab ? "_blank" : "_self"}
        rel="noreferrer noopener"
      >
        {children}
      </a>
    ),
  },
};

const BlockContent = (props) => (
  <StylingWrapper>
    <SanityBlockContent
      projectId={process.env.GATSBY_SANITY_PROJECT_ID}
      dataset={process.env.GATSBY_SANITY_DATASET}
      {...props}
      serializers={{ ...serializers, ...props.serializers }}
    />
  </StylingWrapper>
);

export default BlockContent;
