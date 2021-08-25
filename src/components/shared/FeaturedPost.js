import React from "react";
import styled from "styled-components";
import { Col, Container, media, Row } from "styled-bootstrap-grid";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import get from "lodash.get";

import colors from "utils/colors";
import { getPostCategoryUrl, getPostUrl } from "helpers/linkGenerators";

const PostImg = styled(Img)`
  width: 100%;
  border-radius: 1em;
  margin-bottom: 2em;

  ${media.md`
    margin-bottom: 0;
  `}
`;

const HeadingLink = styled(Link)`
  display: block;
  color: ${colors.primary};
  font-size: 1.2em;
  line-height: 1.5;
  margin: 0.33em 0 1.5em 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ReadMoreLink = styled(Link)`
  float: right;
  padding: 0.5em 1em;
  color: ${colors.primary};
  font-size: 1.2em;
  font-family: "Bebas Neue";
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CategoryLink = styled(Link)`
  font-family: "Bebas Neue";
  text-decoration: none;
  color: ${colors.white};
  padding: 0.35em 0.7em 0.15em 0.7em;
  border-radius: 10px;
  background-color: ${colors.primary};
`;

const FeaturedPost = ({ post }) => {
  const localData = useStaticQuery(graphql`
    query PlaceholderFeaturedImageQuery {
      placeholderImage: file(relativePath: { eq: "blog_placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const postUrl = getPostUrl(post);
  const categoryUrl = getPostCategoryUrl(post);

  return (
    <Container>
      <Row alignItems="center">
        <Col md="6">
          <Link to={postUrl}>
            <PostImg
              fluid={get(
                post,
                "mainImage.asset.fluid",
                localData.placeholderImage.childImageSharp.fluid
              )}
              alt={`DPŻ Blog: ${post.title}`}
            />
          </Link>
        </Col>
        <Col md="6">
          <div>
            <small>
              {post.publishedAt} |{" "}
              <CategoryLink to={categoryUrl}>
                {post.category.title}
              </CategoryLink>
            </small>
            <HeadingLink to={postUrl}>{post.title}</HeadingLink>
            <p>{post.excerpt}</p>
            <ReadMoreLink to={postUrl}>Czytaj dalej</ReadMoreLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedPost;
