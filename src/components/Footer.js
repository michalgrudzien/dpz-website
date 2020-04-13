import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Wave from "react-wavify";

import colors from "utils/colors";

const FooterBody = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  padding: 2em 0;
`;

const waveOptions = {
  height: 100,
  amplitude: 20,
  speed: 0.1,
  points: 3,
};

const WavesWrapper = styled.div`
  height: 80px;

  position: relative;
  top: 5px;
  overflow: hidden;
`;

const TurqoiseWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const DarkBlueWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

const Footer = () => (
  <footer>
    <WavesWrapper>
      <TurqoiseWave
        fill={colors.turquoise}
        options={{ ...waveOptions, speed: 0.15 }}
      />
      <DarkBlueWave fill={colors.darkBlue} options={waveOptions} />
    </WavesWrapper>
    <FooterBody>
      <Container>Footer</Container>
    </FooterBody>
  </footer>
);

export default Footer;
