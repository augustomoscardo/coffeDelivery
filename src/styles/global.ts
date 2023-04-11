import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus { 
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    max-width: 1440px;
    margin: 0 auto;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a, button {
    cursor: pointer;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
