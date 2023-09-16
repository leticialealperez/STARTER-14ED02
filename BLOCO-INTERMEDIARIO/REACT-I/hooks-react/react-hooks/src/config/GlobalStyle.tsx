import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${(props) => props.theme.fonts.join(', ')};

  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.fontColor};
  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }
`;

export default GlobalStyle;
