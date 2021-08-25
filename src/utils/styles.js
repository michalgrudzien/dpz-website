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

export const portableTextStyles = css`
  line-height: 1.85;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 0.5em;
    &:first-child {
      margin-top: 0;
    }
  }

  p {
    line-height: 1.85;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ol,
  ul {
    list-style-position: inside;
  }

  strong,
  b {
    font-weight: 400;
  }

  em {
    font-style: italic;
  }

  blockquote {
    display: block;
    padding: 1em;
    margin: 1em 0;
    border-radius: 16px;
    background-color: ${colors.lightGrey};
    color: ${colors.darkGrey};
    font-style: italic;

    * {
      margin: 0;
    }
  }

  table {
    margin: 1.5em 0;
    width: 100% !important;
  }

  td {
    border: 1px ${colors.lightGrey} solid;
    padding: 0.25em 0.5em;
    max-width: 100%;
  }

  img {
    max-width: 100%;
    border-radius: 1.5em;
    ${boxShadow}
  }
`;
