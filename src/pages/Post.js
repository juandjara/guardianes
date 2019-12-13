import React, { useEffect } from 'react'
import api from '../../cmsapi'
import HeadConfig from '../components/HeadConfig'
import { Link } from '@reach/router'
import Footer from '../components/Footer'
import { useRouteData } from 'react-static'

const CONTAINER_WIDTH = 812;

function groupPosts (posts) {
  const reduced = posts.reduce((acum, elem) => {
    acum[elem.seccion] = acum[elem.seccion] || { seccion: elem.seccion, posts: [] }
    acum[elem.seccion].posts = acum[elem.seccion].posts.concat(elem)
    return acum
  }, {})
  return Object.values(reduced)
}

function PostsHeader ({ sections, currentSection }) {
  return (
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
      <style jsx>{`
header {
  color: white;
  background: linear-gradient(120deg, #8b1f27, #c41525);
  padding-bottom: 32px;
}

nav {
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

:global(nav a) {
  text-decoration: none;
  color: white;
}

:global(nav a.nav-root) {
  align-items: center;
  margin-bottom: 24px;
  display: flex;
}

nav ul {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}

:global(nav ul a) {
  display: block;
}

@media (max-width: ${CONTAINER_WIDTH}px) {
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
      `}</style>
    </header>
  )
}

function FixedMenu ({ groupedPosts }) {
  return (
    <section className="fixed-menu">
      {groupedPosts.map(g => (
        <ul key={g.seccion}>
          <h2>{g.seccion}</h2>
          {g.posts.map(p => (
            <li key={p.id}>
              <a href={`#${p.id}`}>{p.titulo}</a>
            </li>
          ))}
        </ul>
      ))}
      <style jsx>{`
        .fixed-menu {
          position: absolute;
          top: 24px;
          left: 100%;
          width: 100%;
          max-width: 240px;
          padding: 0 16px;
        }
        @media (max-width: 1140px) {
          .fixed-menu {
            display: none;
          }
        }
        .fixed-menu h2 {
          margin-bottom: 12px;
          margin-top: 2rem;
        }
        .fixed-menu li {
          margin-bottom: 8px;
        }
        .fixed-menu a {
          text-decoration: none;
          color: inherit;
        }
        .fixed-menu a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  )
}

function Posts () {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])
  const { sections = [], currentSection = {}, posts = [] } = useRouteData()
  const groupedPosts = groupPosts(posts)
  return (
    <div className="page">
      <HeadConfig />
      <PostsHeader sections={sections} currentSection={currentSection} />
      <div className={posts.length ? 'posts container card' : 'posts container'}>
        {groupedPosts.map(g => (
          <ul key={g.seccion}>
            <h2>{g.seccion}</h2>
            {g.posts.map(p => (
              <li className="post" id={p.id} key={p.id} style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'
              }}>
                <div>
                  <h3>{p.titulo}</h3>
                  <p className="tags">{p.etiquetas.map(tag => (<span key={tag}>{tag}</span>))}</p>
                  <div className="html-content" dangerouslySetInnerHTML={{ __html: p.descripcion }}></div>
                  <p className="icons">
                    {(p.informacion || []).map(i => (
                      <span key={i.icono}>
                        <i className="material-icons">{i.icono}</i>
                        <span>{i.texto}</span>
                      </span>
                    ))}
                  </p>
                </div>
                <img style={{ flex: '0 0 auto', marginLeft: 8, borderRadius: 4, display: 'block' }} src={p.imagen && `${api.thumbsUrl}/200/200/crop/good/${p.imagen.filename}`} />
              </li>
            ))}
          </ul>
        ))}
        <FixedMenu groupedPosts={groupedPosts} />
      </div>
      <Footer></Footer>
      <style jsx>{`
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
}

.container {
  max-width: ${CONTAINER_WIDTH}px;
  padding: 0 16px;
  margin: 0 auto;
}

@media (min-width: ${CONTAINER_WIDTH}px) {
  .card {
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.2);
    border-radius: 8px;
    background-color: white;
  }

  .posts {
    margin-top: -24px;
  }
}

.posts {
  flex-grow: 1;
  position: relative;
}

.posts h2 {
  font-size: 30px;
}

.post {
  min-width: 320px;
  margin-bottom: 32px;
}

.post h3 {
  font-size: 20px;
  margin-top: 0;
}

.post .html-content {
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

.icons {
  font-size: 14px;
}

.icons > span {
  margin-right: 12px;
}

.icons .material-icons {
  vertical-align: bottom;
  display: inline-block;
  margin-right: 4px;
}
      `}</style>
    </div>
  )
}

export default Posts
