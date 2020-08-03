import { createGlobalStyle } from 'styled-components';

import LinLibertine from '.././assets/fonts/LinLibertine_aDRS.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Shawnipedia';
    src: local('LinLibertine'), 
    url(${LinLibertine}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: #f6f6f6;
  }

  .header {
    font-family: 'Shawnipedia';
    text-align: center;
    margin-top: 2rem;
    font-size: xx-large;
  }

  span:nth-child(1) {
    font-size: 1.5em;
  }

  span:nth-child(3) {
    font-size: 1.5em;
  }

  .logo {
    max-height: 200px;
    max-width: auto;
  }

  .sub-header {
    font-family: Georgia;
    text-align: center;
    margin-bottom: 2.5em;
  }

  h1 {
    font-family: 'Shawnipedia';
  }
`;