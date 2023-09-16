import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
<<<<<<< HEAD
    font-family: ${(props) => props.theme.fonts.join(", ")};
    color: ${(props) => props.theme.colors.fontColor};
=======
    font-family: ${(props) => props.theme.fonts.join(', ')};
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b
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
