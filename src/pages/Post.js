import React from 'react'
import api from '../../cmsapi'
import HeadConfig from '../components/HeadConfig'
import { Link } from '@reach/router'
import Footer from '../components/Footer'
import { useRouteData } from 'react-static'

const CONTAINER_WIDTH = 812;

function Post () {
  const { sections = [], currentSection = {}, posts = [] } = useRouteData()
  return (
    <div className="page">
      <HeadConfig />
      <header>
        <nav>
          <Link className="nav-root" to="/">
            <img className="site-logo" src="/images/escudo-flat-blanco.png" alt="logo" />
            <h1 className="title">Asociación Guardianes</h1>
          </Link>
          <ul>
            {sections.map(s => (
              <li key={s.id} className={s.id === currentSection.id ? 'selected' : ''}>
                <Link to={`/${s.id}`}>
                  <img src={s.icono && `${api.thumbsUrl}/200/200/crop/good/${s.icono.filename}`} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="container section-description">
          <h1>{currentSection.titulo}</h1>
          <div className="html-content" dangerouslySetInnerHTML={{ __html: currentSection.descripcion }}></div>
        </section>
      </header>
      <ul className={posts.length ? 'container card' : 'container'}>
        {posts.map(p => (
          <li key={p.id}>
            <h2>{p.titulo}</h2>
            <p className="tags">{p.etiquetas.map(tag => (<span key={tag}>{tag}</span>))}</p>
            <div className="html-content" dangerouslySetInnerHTML={{ __html: p.descripcion }}></div>
          </li>
        ))}
      </ul>
      <Footer></Footer>
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f8f8f8;
        }

        header {
          color: white;
          background: linear-gradient(120deg, #8b1f27, #c41525);
          padding-bottom: 32px;
        }

        nav {
          padding: 1rem;
        }
        :global(nav a) {
          text-decoration: none;
          color: white;
        }
        nav,
        :global(nav .nav-root),
        nav ul {
          display: flex;
        }
        nav {
          align-items: flex-start;
          flex-wrap: wrap;
        }
        :global(.nav-root) {
          align-items: center;
          margin-bottom: 24px;
        }
        nav ul {
          flex-grow: 1;
          justify-content: flex-end;
        }
        :global(nav ul a) {
          display: block;
        }

        @media (max-width: 812px) {
          nav ul {
            justify-content: center;
          }
        }

        nav ul li {
          padding-bottom: 8px;
          border-bottom: 3px solid transparent;
          margin: 0 8px;
          text-align: center;
        }
        nav ul li p {
          margin: 0;
        }
        nav ul img {
          height: 45px;
        }
        nav ul li:hover,
        nav ul li.selected {
          border-bottom-color: white;
        }

        :global(.nav-root h1) {
          font-size: 2rem;
          margin: 0;
        }

        .site-logo {
          height: 60px;
          margin-right: 1rem;
        }

        .container {
          max-width: ${CONTAINER_WIDTH}px;
          padding: 0 16px;
          margin: 0 auto;
        }

        .section-description h1 {
          font-size: 4rem;
          margin: 16px 0;
        }

        .section-description .html-content {
          font-size: 20px;
        }

        .card {
          box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.2);
          border-radius: 8px;
          background-color: white;
        }
        
        .page > ul.container {
          flex-grow: 1;
          margin-top: -24px;
        }

        .page > ul > li {
          flex: 1 1 50%;
          min-width: 320px;
          padding: 1rem 0;
        }

        .page > ul > li h2 {
          margin-bottom: 1rem;
        }

        .page > ul > li .html-content {
          line-height: 1.6;
        }

        .tags span {
          background-color: #eee;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .tags span + span {
          margin-left: 8px;
        }
      `}</style>
    </div>
  )
}

export default Post
