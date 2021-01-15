import React from "react";
import { Container, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import YoutubeBackground from "react-youtube-background";
import { graphql, useStaticQuery } from "gatsby";

import WindowCheck from "components/WindowCheck";
import LinkButton from "components/shared/LinkButton";

import { getSingleNode } from "helpers/nodeExtractors";
import colors from "utils/colors";
import { boxShadow } from "utils/styles";

import wtLogoImg from "assets/images/dpz_world_tour_logo_w.svg";
import wssLogoImg from "assets/images/dpz_wss_logo_w.svg";

const Wrapper = styled.section`
  margin-top: 6em;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5em;
`;

const StyledYoutubeBackground = styled(props => (
  <YoutubeBackground {...props} />
))`
  border-radius: 40px;
`;

const ToursWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  grid-gap: 1em;

  ${media.lg`
    grid-template-columns: 50% 50%;
    grid-gap: 2em;
  `}
`;

const TourLogoImg = styled.img`
  display: block;
  max-width: 260px;
  margin: 0 auto;
  opacity: 0.65;
`;

const TourText = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding: 2em 0 1.5em;
  display: none;
`;

const TourLinkButton = styled(LinkButton)`
  margin-top: 1em;
`;

const Tour = styled.div`
  ${boxShadow};
  height: 480px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  padding: 1em;
  font-size: 0.85em;

  transition: all 300ms cubic-bezier(0.855, -0.41, 0.275, 1.65);
  background-color: rgba(0, 0, 0, 0.35);

  :hover {
    background-color: rgba(0, 0, 0, 0.75);
    transform: scale(1.1);

    ${TourText} {
      display: block;
    }

    ${TourLogoImg} {
      max-width: 150px;
      opacity: 1;
    }
  }
`;

const TourContentWrapper = styled.div`
  width: 100%;
`;

const playerOptions = {
  autoplay: 1,
  controls: 0,
  loop: true,
  modestbranding: 1,
  playsinline: 1,
  start: 58,
  end: 251,
};

const Tours = () => {
  const response = useStaticQuery(graphql`
    query ToursQuery {
      allSanityHomepage {
        nodes {
          content {
            cruises_wssText
            cruises_wtText
            cruises_title
          }
        }
      }
    }
  `);

  const data = getSingleNode(response, "homepage");

  return (
    <Wrapper>
      <Container>
        <Title>{data.cruises_title}</Title>

        <WindowCheck>
          <ToursWrapper>
            <StyledYoutubeBackground
              videoId="scOuCXapnm4"
              playerOptions={{ ...playerOptions, start: 58, end: 251 }}
            >
              <Tour>
                <TourContentWrapper>
                  <TourLogoImg src={wtLogoImg} alt="DPŻ World Tour" />
                  <TourText>
                    <p>{data.cruises_wtText}</p>
                    <TourLinkButton internal to="/rejsy/dpz-world-tour">
                      Dowiedz się więcej
                    </TourLinkButton>
                  </TourText>
                </TourContentWrapper>
              </Tour>
            </StyledYoutubeBackground>
            <StyledYoutubeBackground
              videoId="szfhEsHKFec"
              playerOptions={{ ...playerOptions, start: 17, end: 225 }}
            >
              <Tour>
                <TourContentWrapper>
                  <TourLogoImg src={wssLogoImg} alt="DPŻ We Shall Sea" />
                  <TourText>
                    <p>{data.cruises_wssText}</p>
                    <TourLinkButton internal to="/rejsy/dpz-we-shall-sea">
                      Dowiedz się więcej
                    </TourLinkButton>
                  </TourText>
                </TourContentWrapper>
              </Tour>
            </StyledYoutubeBackground>
          </ToursWrapper>
        </WindowCheck>
      </Container>
    </Wrapper>
  );
};

export default Tours;
