import React from 'react'
import api from '../../cmsapi'

const SectionIcons = ({ pages }) => (
  <ul className="section-icons">
    <style jsx>{`
      .section-icons {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 5rem;
      }

      .section-icons li {
        width: 125px;
        text-align: center;
        text-transform: uppercase;
        padding:  0 1rem 1rem 1rem;
        box-sizing: content-box;
        font-size: 18px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: opacity 0.25s ease;
      }

      .section-icons a {
        text-decoration: none;
        color: inherit;
      }

      .section-icons li:hover {
        opacity: 0.75;
      }

      .section-icons img {
        display: block;
        width: 75px;
        height: auto;
        margin: 0 auto;
      }
    `}</style>
    {pages.map(p => (
      <li key={p.id}>
        <a href={`#${p.id}`}>
          <img src={p.icono && `${api.thumbsUrl}/200/200/crop/good/${p.icono.filename}`} />
          <p>{p.titulo}</p>
        </a>
      </li>
    ))}
  </ul>
)

export default SectionIcons
