/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import get from "lodash.get";

function SEO({ description, lang, image, title = "DPŻ" }) {
  const response = useStaticQuery(
    graphql`
      query SeoQuery {
        allSanitySiteMetadata {
          nodes {
            pageTitle
            pageDescription
            defaultMetaImage {
              asset {
                fixed(width: 1200, height: 630) {
                  src
                }
              }
            }
          }
        }
      }
    `
  );

  const data = get(response, "allSanitySiteMetadata.nodes[0]", {});

  const metaDescription = description || data.pageDescription;

  let imageUrl = undefined;

  if (image) {
    if (image.hasOwnProperty("asset")) {
      imageUrl = image.asset.fixed.src;
    } else {
      imageUrl = image;
    }
  }

  const metaImage = imageUrl || data.defaultMetaImage.asset.fixed.src;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.pageTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.pageTitle,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: parseInt(process.env.GATSBY_NO_FOLLOW)
            ? `noindex,nofollow`
            : `index,follow`,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
