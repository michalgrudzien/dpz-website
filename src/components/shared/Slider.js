import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import colors from "utils/colors";

const SliderWrapper = styled.div`
  border-radius: 1.5em;
  overflow: hidden;
  margin: 1em 0;

  .awssld {
    --slider-height-percentage: 66%;
    --slider-transition-duration: 400ms;
    --organic-arrow-thickness: 4px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 32px;
    --organic-arrow-color: ${colors.primary};
    --control-button-width: 8%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: #62a4fa;
    --control-bullet-active-color: #538bd5;
    --loader-bar-color: ${colors.primary};
    --loader-bar-height: 4px;
  }
`;

const Slider = ({ gallery }) => (
  <SliderWrapper>
    <AwesomeSlider>
      {gallery.map((galleryItem) => (
        <div data-src={galleryItem} />
      ))}
    </AwesomeSlider>
  </SliderWrapper>
);

export default Slider;
