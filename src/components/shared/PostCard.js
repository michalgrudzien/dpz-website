import React from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { graphql, Link, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import get from "lodash.get";

import colors from "utils/colors";

import { boxShadow } from "utils/styles";
import { getCategoryUrl, getPostUrl } from "helpers/linkGenerators";

const PaddingWrapper = styled.div`
  padding-top: 2.5em;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 270px 325px;
  grid-gap: 5px;
  height: 600px;
  ${boxShadow};

  ${media.xs`
    height: auto;
    grid-template-rows: 270px auto;
  `}
`;

const TextWrapper = styled.div`
  padding: 1em 15px 1.5em;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.md`
    padding: 2em 15px 1em;
    font-size: 0.85em;
  `}
`;

const PostImgBackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0 0 1em 1em;
  overflow: hidden;
`;

const PostImgBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`;

const HeadingLink = styled(Link)`
  display: block;
  color: ${colors.primary};
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0.33em 0 1.5em 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.p`
  height: 215px;
  overflow: hidden;

  ${media.xs`
    height: auto;
  `}
`;

const ReadMoreLink = styled(Link)`
  float: right;
  padding: 0.5em 0 0 1em;
  color: ${colors.primary};
  font-size: 1.25em;
  font-family: "Bebas Neue";
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CategoryLink = styled(Link)`
  font-family: "Bebas Neue";
  text-decoration: none;
  white-space: nowrap;
  color: ${colors.white};
  padding: 0.25em 0.7em 0.1em 0.7em;
  border-radius: 10px;
  background-color: ${colors.primary};
  letter-spacing: 0.2px;
  transition: background-color 100ms ease-in;

  :hover {
    background-color: ${colors.secondary};
  }
`;

const MetadataWrapper = styled.small`
  line-height: 1.66;
`

const PostCard = ({ post }) => {
  const localData = useStaticQuery(graphql`
    query PlaceholderImageQuery {
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

  return (
    <PaddingWrapper>
      <Wrapper>
        <Link to={postUrl}>
          <PostImgBackgroundWrapper>
            <PostImgBackground
              fluid={get(
                post,
                "mainImage.asset.fluid",
                localData.placeholderImage.childImageSharp.fluid
              )}
              alt={`DPŻ Blog: ${post.title}`}
            />
          </PostImgBackgroundWrapper>
        </Link>
        <TextWrapper>
          <MetadataWrapper>
            {post.publishedAt} |{" "}
            {post.category.map((category) => <><CategoryLink to={getCategoryUrl(category)}>{category.title}</CategoryLink>{" "}</>)}
          </MetadataWrapper>
          <HeadingLink to={postUrl}>{post.title}</HeadingLink>
          <Content>{post.excerpt}</Content>
          <div>
            <ReadMoreLink to={postUrl}>Czytaj dalej</ReadMoreLink>
          </div>
        </TextWrapper>
      </Wrapper>
    </PaddingWrapper>
  );
};

export default PostCard;
