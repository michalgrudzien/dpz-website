import { css } from "styled-components";
import colors from "utils/colors";

export const boxShadow = css`
  box-shadow: 0px 3px 11px -8px rgba(0, 0, 0, 0.45);
`;

export const animatedGradientBg = css`
  background: ${colors.gradient};
  background-size: 400% 400%;
  animation: DpzGradient 20s ease infinite;

  @-webkit-keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes DpzGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
