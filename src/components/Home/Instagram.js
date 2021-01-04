import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Slider from "react-slick";
import get from "lodash.get";

import ajax from "helpers/ajax";

import instagramBgImg from "assets/images/instagram_bg.svg";
import likeIcon from "assets/images/like_icon.svg";
import leftChevronIcon from "assets/images/left_chevron.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { boxShadow } from "utils/styles";
import colors from "utils/colors";

const Wrapper = styled.section`
  margin: 2em 0;
  background-image: url(${instagramBgImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 115%;
`;

const SlidersWrapper = styled.div`
  ${boxShadow};
  background-color: ${colors.white};

  .slick-dots {
    position: static;
    padding-bottom: 12px;

    li button:before {
      font-size: 12px;
    }

    ${media.lg`
      display: none;
    `}
  }

  .slick-arrow {
    display: none;
    width: 32px;
    height: 64px;
    top: 30%;

    ::before{
      content: "";
      display: block;
      width: 32px;
      height 64px;
      background-image: url(${leftChevronIcon});
      background-size: contain;
    }

    &.slick-next{
      transform: scale(-1);
      transform-origin: 50% 25%;
      right: -48px;
    }
    &.slick-prev{
      left: -48px;
    }
  }
`;

const Photo = styled.img`
  border-radius: 0 0 20px 20px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const PhotoContent = styled.div`
  padding: 1.5em 2em;
  color: ${colors.secondary};
`;

const PhotoLikes = styled.span`
  display: inline-block;
  font-family: "Bebas Neue Bold";
  font-size: 20px;
  padding-left: 8px;
  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${likeIcon});
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    top: 6px;
    left: -8px;
  }
`;

const PhotoText = styled.p`
  font-size: 0.85em;
  margin: 1em 0 0 0;
`;

const StyledSlider = styled(Slider)`
  :focus {
    outline: none;
  }
`;

const AccountInfoWrapper = styled.div`
  margin-top: 2em;

  ${media.lg`
    text-align: right;
  `}
`;

const AccountLink = styled.a`
  display: block;
  font-size: 4em;
  color: ${colors.primary};
  font-family: "Bebas Neue Bold";
  text-decoration: none;
`;

const Hashtags = styled.div`
  margin: 2em 0;
`;

const HashtagLink = styled.a`
  font-family: "Bebas Neue Bold";
  text-decoration: none;
  color: ${colors.secondary};
  font-size: 2em;

  :hover {
    color: ${colors.primary};
  }
`;

const renderPhotos = data => {
  console.log(data);
  const posts = get(
    data,
    "graphql.user.edge_owner_to_timeline_media.edges",
    []
  );

  return posts.map(post => {
    const photoUrl = get(post, "node.thumbnail_src", "");
    const photoAlt = get(
      post,
      "node.accessibility_caption",
      "Photo by Dobra Praktyka Żeglarska"
    );
    const photoLikeCount = get(post, "node.edge_liked_by.count", 0);
    const photoText = get(
      post,
      "node.edge_media_to_caption.edges[0].node.text",
      ""
    );

    return (
      <div>
        <Photo src={photoUrl} alt={photoAlt} />
        <PhotoContent>
          <PhotoLikes>{photoLikeCount}</PhotoLikes>
          <PhotoText>{photoText}</PhotoText>
        </PhotoContent>
      </div>
    );
  });
};

const getFollowedByCount = data =>
  get(data, "graphql.user.edge_followed_by.count", 0);

const sliderSettings = {
  lazyLoad: true,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  fade: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: false,
      },
    },
  ],
};

const Instagram = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    ajax(
      "GET",
      "https://www.instagram.com/de_pe_zet/?__a=1",
      null,
      data => setData(JSON.parse(data)),
      () => setData(null)
    );
  }, []);

  if (!data) return <></>;

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg="5" lgOrder="last">
            <AccountInfoWrapper>
              <AccountLink
                href="https://www.instagram.com/de_pe_zet/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @_de_pe_zet
              </AccountLink>
              <span>followed by {getFollowedByCount(data)} on Instagram!</span>
              <Hashtags>
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzworldtour/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzworldtour
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzweshallsea/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzweshallsea
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/nosdpz/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #nosdpz
                </HashtagLink>
                <br />
                <HashtagLink
                  href="https://www.instagram.com/explore/tags/dpzspozycie/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  #dpzspozycie
                </HashtagLink>
              </Hashtags>
            </AccountInfoWrapper>
          </Col>
          <Col lg="5" lgOffset="1">
            <SlidersWrapper>
              <StyledSlider {...sliderSettings}>
                {renderPhotos(data)}
              </StyledSlider>
            </SlidersWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Instagram;
