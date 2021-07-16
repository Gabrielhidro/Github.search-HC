import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
 :root {
  --bg-light: #ededed;
  --bg-medium: #e1ded5;
  --bg-dark: #151515;

  --text-medium: #808080;

 }

  body {
    margin: 0 auto;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 1200px;
    font-family: 'PT Sans Caption', sans-serif;
    font-size: 0.7rem;
    background: var(--bg-light);
  }
`
