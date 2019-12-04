import React from 'react'
import Social from './Social'

const Footer = () => (
  <footer>
    <style jsx>{`
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        padding: 12px 24px;
        background-color: #333;
        color: white;
      }
      footer .copy {
        margin-bottom: 8px;
      }
      footer .copy a {
        color: #9397a2;
        font-size: 12px;
        text-decoration: none;
      }
      footer .copy a:hover {
        border-bottom: 1px solid currentColor;
      }
      footer .copy a + a {
        margin-left: 8px;
      }
      footer .copy p {
        margin-bottom: 4px;
      }

      @media (max-width: 812px) {
        footer {
          padding: 8px 12px;
        }
      }
    `}</style>
    <div className="copy">
      <p>Asociación Guardianes © 2019</p>
      <a href="#">Política de Privacidad</a>
      <a href="#">RGPD</a>
    </div>
    <Social className="social-foot" />
  </footer>
)

export default Footer
