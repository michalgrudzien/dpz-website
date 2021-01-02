import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import CircleNumber from "components/shared/CircleNumber";
import Card from "components/shared/Card";
import colors from "utils/colors";

const HeroWrapper = styled.div`
  position: relative;
  margin-top: 120px;

  ${media.md`
    margin-top: 180px;
  `}
`;

const HeroHeading = styled.h1`
  padding-left: 15px;

  ${media.md`
    padding-left: 40px;
  `}
`;

const HeroPretitle = styled.span`
  color: ${colors.primary};
  display: block;
`;

const HeroTitle = styled.span`
  display: block;
  font-size: 1.25em;
  padding-right: 30%;
`;

const MembersCount = styled(CircleNumber)`
  position: absolute;
  bottom: -10px;
  right: 15px;
  z-index: 10;

  ${media.sm`
    bottom: -40px;
    right: 35px;
  `}
`;

const HeroCard = styled(Card)`
  ${media.sm`
    margin-top: 24px;
  `}
`;

const HeroSection = () => {
  return (
    <section>
      <HeroWrapper>
        <Container>
          <Row>
            <Col>
              <HeroHeading>
                <HeroPretitle>Stowarzyszenie</HeroPretitle>
                <HeroTitle>Dobra Praktyka Żeglarska</HeroTitle>
              </HeroHeading>
              <MembersCount number={34} label="członków" />
            </Col>
          </Row>
          <Row>
            <Col>
              <HeroCard>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </HeroCard>
            </Col>
          </Row>
        </Container>
      </HeroWrapper>
    </section>
    // <Section>
    //   <Fade>
    //     <P.HeaderWrapper>
    //       <Container>
    //         <Row>
    //           <Col col lg={12} sm={8} xs={6}>
    //             <P.TitleWrapper>
    //               <Subtitle>Stowarzyszenie</Subtitle>
    //               <Title> Dobra Praktyka Żeglarska</Title>
    //             </P.TitleWrapper>
    //           </Col>
    //           <Col col lgOffset={1} lg={10} sm={4} xs={6}>
    //             <P.StyledCircleItem number={26}>
    //               członków
    //             </P.StyledCircleItem>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </P.HeaderWrapper>
    //   </Fade>
    //   <Container>
    //     <Row>
    //       <Col col={12}>
    //         <Fade>
    //           <P.StyledCard>
    //             <P.StyledContentText>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    //               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //               aliquip
    //               ex
    //               ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    //               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    //               deserunt
    //               mollit anim id est laborum.
    //             </P.StyledContentText>
    //           </P.StyledCard>
    //         </Fade>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Section>
  );
};

export default HeroSection;
