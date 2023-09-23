import { COLORS } from "./color";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import jeong from "styles/font/jeong.ttf";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "jeong";
    src: local("jeong");
    font-style: normal;
    src: url(${jeong}) format("truetype");
  }

  :root {
    --toastify-color-success: ${COLORS.LIGHT_BROWN};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 120%;
    font-family: "jeong", sans-serif;

    height: 844px;
    background-color: ${COLORS.BLACK};

    padding-left: 2rem;
    padding-right: 2rem;
  }

  body,
  button,
  input {
    font-size: 1em;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
