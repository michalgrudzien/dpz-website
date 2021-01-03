import React from "react";
import styled from "styled-components";
import { Col, Container, media, Row } from "styled-bootstrap-grid";
import { Link } from "gatsby";

import colors from "utils/colors";

import mockImg from "assets/images/brand_photo.jpg";
import Card, { CardSidePadding } from "components/shared/Card";
import { boxShadow } from "utils/styles";

const PaddingWrapper = styled.div`
  padding-top: 2.5em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${boxShadow}
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

const PostImg = styled.img`
  width: 100%;
  border-radius: 0 0 1em 1em;
  margin-bottom: 1em;

  ${media.md`
    margin-bottom: 0;
  `}
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
  height: 100%;
`;

const ReadMoreLink = styled(Link)`
  float: right;
  padding: 0.5em 0 0 1em;
  color: ${colors.primary};
  font-size: 1.25em;
  font-family: "Bebas Neue Bold";
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostCard = ({ text }) => (
  <PaddingWrapper>
    <Wrapper>
      <Link to="/">
        <PostImg src={mockImg} alt={"post title"} />
      </Link>
      <TextWrapper>
        <small>24 września 2020</small>
        <HeadingLink to="/">
          Lorem ipsum post title Lorem ipsum post title Lorem ipsum post title
        </HeadingLink>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </Content>
        <div>
          <ReadMoreLink to="/">Czytaj dalej</ReadMoreLink>
        </div>
      </TextWrapper>
    </Wrapper>
  </PaddingWrapper>
  //   <Container>
  //     <Row alignItems="center">
  //       <Col md="6">
  //         <Link to="/">
  //           <PostImg src={mockImg} alt={"post title"} />
  //         </Link>
  //       </Col>
  //       <Col md="6">
  //         <div>
  //           <Date>24 września 2020</Date>
  //           <HeadingLink to="/">
  //             Lorem ipsum post title Lorem ipsum post title Lorem ipsum post title
  //           </HeadingLink>

  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //             aliquip ex ea commodo consequat. Duis aute irure dolor in
  //             reprehenderit in voluptate velit esse cillum
  //           </p>
  //           <ReadMoreLink to="/">Czytaj dalej</ReadMoreLink>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
);

export default PostCard;