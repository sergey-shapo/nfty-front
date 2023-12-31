import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  

 html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Roboto',sans-serif;
  font-display: swap;
  vertical-align: baseline;
  }
  
  h1,
  h2,
  h3,
  h4
  {
    margin: 0;
    font : inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  input,
  textarea {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  img{
    max-width: 100%;
    padding: 0;
  }
  


`;

export default GlobalStyle;
