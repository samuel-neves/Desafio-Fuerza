import { createGlobalStyle } from 'styled-components'

import { WaterMark } from '../assets'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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
`;

export default GlobalStyle;
