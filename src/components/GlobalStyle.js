import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --light-red: #c41525;
    --dark-red: #8b1f27;
    --gradient: linear-gradient(80deg, #c41525 15%, #8b1f27 50%);
    --family-sans: 'Roboto';
    --family-serif: 'Bree Serif'
  }

  body {
    margin: 0;
    color: white;
    background: var(--gradient);
    min-height: 100vh;
    font-family: var(--family-sans), -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
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

  h1, h2, h3, h4 {
    margin: 0;
  }
`

export default GlobalStyle
