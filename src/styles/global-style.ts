import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    color: ${(props) => props.theme.colors.gray["100"]};
    background-color: ${(props) => props.theme.colors.gray["600"]};
    -webkit-font-smooth: antialiased;
    font-family: 'Inter', sans-serif;
    height: 100%;
  }
  html {
    height: 100%;
  }
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
