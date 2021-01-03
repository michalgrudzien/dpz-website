import React from "react";
import styled from "styled-components";
import { Col, Container, media, Row } from "styled-bootstrap-grid";
import { Link } from "gatsby";

import colors from "utils/colors";

import mockImg from "assets/images/brand_photo.jpg";

const PostImg = styled.img`
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
  font-family: "Bebas Neue Bold";
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CategoryLink = styled(Link)`
  font-family: "Bebas Neue Bold";
  text-decoration: none;
  color: ${colors.white};
  padding: 0.35em 0.7em 0.15em 0.7em;
  border-radius: 10px;
  background-color: ${colors.primary};
`;

const FeaturedPost = () => (
  <Container>
    <Row alignItems="center">
      <Col md="6">
        <Link to="/">
          <PostImg src={mockImg} alt={"post title"} />
        </Link>
      </Col>
      <Col md="6">
        <div>
          <small>
            24 września 2020 | <CategoryLink to="/">Aktualności</CategoryLink>
          </small>
          <HeadingLink to="/">
            Lorem ipsum post title Lorem ipsum post title Lorem ipsum post title
          </HeadingLink>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum
          </p>
          <ReadMoreLink to="/">Czytaj dalej</ReadMoreLink>
        </div>
      </Col>
    </Row>
  </Container>
);

export default FeaturedPost;
