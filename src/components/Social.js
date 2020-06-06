import React from 'react'

const Social = ({ className }) => (
  <div className={`social ${className || ''}`}>
    <style jsx>{`
      .social a {
        padding: 12px 8px;
        display: inline-block;
      }

      .social a:hover {
        opacity: 0.75;
      }

      .social img {
        width: 1.5rem;
      }

      @media (max-width: 812px) {
        .social {
          position: absolute;
          top: 0;
          right: 4px;
        }
      }
    `}</style>
    <a title="@asoguardianes" href="https://twitter.com/asoguardianes" target="_blank">
      <img src="/images/social-icons/twitter.svg" alt="icon" />
    </a>
    <a title="Guardianes Sevilla" href="https://www.facebook.com/Guardianes-Sevilla-758918664213908/" target="_blank">
      <img src="/images/social-icons/facebook.svg" alt="icon" />
    </a>
    <a title="@asoguardianes" href="https://instagram.com/asoguardianes" target="_blank">
      <img src="/images/social-icons/instagram.svg" alt="icon" />
    </a>
    <a title="guardianes_esports" href="https://www.twitch.tv/guardianes_esports" target="_blank">
      <img src="/images/social-icons/twitch.svg" alt="icon" />
    </a>
    <a title="asociacion.guardianes@gmail.com" href="mailto:asociacion.guardianes@gmail.com" target="_blank">
      <img src="/images/social-icons/mail.svg" alt="icon" />
    </a>
  </div>
)

export default Social
