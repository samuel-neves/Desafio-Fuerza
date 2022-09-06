import { createGlobalStyle } from 'styled-components'

import { WaterMark } from '../assets'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
  }

  body {
    background-color: #f8e5d6;
    background-image: url(${WaterMark});
    background-repeat: no-repeat;
    background-position: 0 8vh;
  }

  a:hover, button:hover {
    cursor: pointer;
  }

  a:visited {
    color: #834825;
  }

  button.MuiButton-contained {
    padding: 12px 51px;
    border-radius: 24px;
    text-transform: none;
    font-weight: 700;
    font-family: "Montserrat";
  }

  h1 {
    font-weight: 400;
    color: #834825;
  }
`;

export default GlobalStyle;
