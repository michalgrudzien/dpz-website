import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Link } from "gatsby";

import CircleFile from "components/shared/CircleFile";
import { CardSidePadding } from "components/shared/Card";

import { boxShadow } from "utils/styles";
import colors from "utils/colors";

import groupPhotoImg from "assets/images/group_photo.jpg";
import logoCornerImg from "assets/images/logo_corner.svg";

const Wrapper = styled.section`
  margin-top: -200px;
`;

const ContentCard = styled.div`
  ${boxShadow}
  background-color: ${colors.white};
  background-image: url(${logoCornerImg});
  background-size: 240px;
  background-repeat: no-repeat;
  background-position: bottom left;
  color: ${colors.secondary};
  padding: 4em 0 3em;
`;

const Title = styled.h1`
  text-align: center;
  color: ${colors.primary};
  margin-bottom: 1.5em;
`;

const GroupPhotoImg = styled.img`
  border-radius: 0 0 40px 40px;
  width: 100%;
  margin: 3em 0;
`;

const FilesWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 24px;
  width: 100%;
`;

const StyledCircleFile = styled(CircleFile)`
  margin: 0 auto;
`;

const SecondaryText = styled.div`
  padding-bottom: 200px;
`;

const JoinUs = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col lg="10" lgOffset="1">
          <ContentCard>
            <CardSidePadding>
              <Title>Jeszcze ci mało? Dołącz do nas na stałe!</Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </CardSidePadding>
            <GroupPhotoImg src={groupPhotoImg} />
            <CardSidePadding>
              <Row>
                <Col lg="6">
                  <SecondaryText>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      <Link to="/o-nas">Więcej o Stowarzyszeniu</Link>
                    </p>
                  </SecondaryText>
                </Col>
                <Col lg="6">
                  <FilesWrapper>
                    <StyledCircleFile
                      url="/"
                      label="Deklaracja członkowska"
                      dark
                    />
                    <StyledCircleFile
                      url="/"
                      label="Statut Stowarzyszenia"
                      dark
                    />
                  </FilesWrapper>
                </Col>
              </Row>
            </CardSidePadding>
          </ContentCard>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default JoinUs;
