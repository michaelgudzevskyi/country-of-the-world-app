import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #eaebee;
  }

  :root {
    --white: #FFFFFF;
    --main: #173c5c;
    --accent: #8257e6;
    --red: red;
  }

  body, input, button {
    font-family: 'Mulish', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  .popup-content {
    margin: auto;
    background: #fff;
    width: auto;
    padding: 0;
    border: none;
    border-radius: 5px;
 }
`
