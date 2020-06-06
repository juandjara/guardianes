import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    background: linear-gradient(80deg, #c41525 15%, #8b1f27 50%);
    min-height: 100vh;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
