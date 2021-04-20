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

    --grey-200: #d6d6d6;
    --grey-500: #707070;

    

    --green-mint: #A9C5BA;
    --dark-green: #2e656a;

    --blue-50: #ebf8ff;
    --blue-400: #3172b7;

    --red-200: #fddede;
    --red: #c54040;
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
`
