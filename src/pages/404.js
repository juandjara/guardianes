import React from 'react'
import { Link } from '@reach/router'

export default () => (
  <div className="page">
    <h1>404 - Aquí no hay nada</h1>
    <Link className="back-link" to="/">Volver</Link>
    <style jsx>{`
      :global(html, body) {
        margin: 0;
        font-family: 'Alegreya Sans', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      .page {
        color: white;
        background: linear-gradient(120deg, #8b1f27, #c41525);
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      h1, p {
        margin: 0;
      }
      :global(.back-link) {
        color: white;
        margin-top: 1rem;
        font-size: 16px;
        opacity: 0.8;
        text-decoration: none;
      }
      :global(.back-link):hover {
        text-decoration: underline;
        opacity: 1;
      }
    `}</style>
  </div>
)
