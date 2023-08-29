import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.join(', ')};
    color: ${(props) => props.theme.colors['light'].fontColor};
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: pointer;
    
  }
`;

export default GlobalStyle;
