import React from 'react'
import { Link } from '@reach/router'

const Sections = ({ pages }) => {
  return (
    <div className="sections">
      <style jsx>{`  
        :global(.section-link) {
          display: flex;
          overflow: hidden;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          :global(.section-link) {
            display: block;
          }
        }

        :global(.section-link:nth-child(even) img) {
          order: 2;
        }
  
        .section-img {
          max-width: 50%;
        }

        @media (max-width: 600px) {
          .section-img {
            max-width: 100%;
          }
        }
  
        .section-img,
        .section-label {
          flex: 1 1 50%;
        }
  
        .section-label {
          text-align: center;
          background-color: #f0f0f0ee;
          color: #333;
          margin-top: -4px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
  
        .section-label h2 {
          font-size: 48px;
          margin-bottom: 0;
        }
  
        .section-description {
          font-size: 22px;
          line-height: 30px;
          max-width: 520px;
        }
      `}</style>
      {pages.map(p => (
        <Link className="section-link" id={p.id} key={p.id} to={`/${p.id}`}>
          <img className="section-img" src={p.imagen && p.imagen.data.full_url} alt="section image" />
          <div className="section-label">
            <h2>{p.titulo}</h2>
            <div className="section-description html-content" dangerouslySetInnerHTML={{ __html: p.descripcion }}></div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Sections
