import React from 'react'
import api from '../../cmsapi'
import { Link } from '@reach/router'
import { useRouteData, useSiteData } from 'react-static'
import CollectionLinks from '../components/CollectionLinks'
import styled from 'styled-components'

const CONTAINER_WIDTH = 812;

function groupPosts (posts) {
  const reduced = posts.reduce((acum, elem) => {
    acum[elem.seccion] = acum[elem.seccion] || { seccion: elem.seccion, posts: [] }
    acum[elem.seccion].posts = acum[elem.seccion].posts.concat(elem)
    return acum
  }, {})
  return Object.values(reduced)
}

const FixedMenuStyles = styled.section`
  position: absolute;
  top: 24px;
  left: 100%;
  width: 100%;
  max-width: 240px;
  padding: 0 16px;

  @media (max-width: 1140px) {
    display: none;
  }

  h2 {
    margin-bottom: 12px;
    margin-top: 2rem;
  }

  li {
    margin-bottom: 8px;
  }
`

function FixedMenu ({ groupedPosts }) {
  return (
    <FixedMenuStyles className="fixed-menu">
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
    </FixedMenuStyles>
  )
}

const CollectionStyles = styled.div`
  min-height: 100vh;
  ${props => props.background ? `
    background-image: url('${props.background}');
    background-size: cover;
  ` : ''}

  .container {
    max-width: ${CONTAINER_WIDTH}px;
    padding: 0 16px;
  }

  .html-content {
    line-height: 1.6;
  }

  .collection-nav {
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .nav-header {
      align-items: center;
      display: flex;

      .nav-logo {
        height: 60px;
        margin-right: 1rem;
      }

      .nav-title {
        font-family: var(--family-serif), serif;
        line-height: 1.15;
        font-size: 42px;
        margin: 0;
      }
    }    
  }

  .collection-header {
    h1 {
      font-size: 4rem;
      margin: 16px 0;
    }

    .html-content {
      font-size: 20px;
    }
  }

  .posts-list {
    flex-grow: 1;
    position: relative;

    h2 {
      font-size: 30px;
    }

    .post {
      min-width: 320px;
      margin-bottom: 32px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h3 {
        font-size: 20px;
        margin-top: 0;
      }

      img {
        flex: 0 0 auto;
        margin-left: 8;
        border-radius: 4px;
        display: block;
      }
    }
  }

  .tags {
    span {
      background-color: #eee;
      padding: 4px 8px;
      border-radius: 4px;

      & + span {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: ${CONTAINER_WIDTH}px) {
    .card {
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius: 8px;
      background-color: white;
    }

    .collection-links {
      justify-content: center;
    }

    .posts-list {
      margin-top: -24px;

      .post {
        flex-direction: column-reverse;

        img {
          margin: 8px auto;
        }
      }
    }    
  }
`

function Post ({ post }) {
  return (
    <li className="post" id={post.id}>
      <div>
        <h3>{post.titulo}</h3>
        <p className="tags">
          {post.etiquetas.map(tag => (<span key={tag}>{tag}</span>))}
        </p>
        <div className="html-content" dangerouslySetInnerHTML={{ __html: post.descripcion }}></div>
      </div>
      <img src={post.imagen && api.makeImageUrl(post.imagen, 'thumbnail')} />
    </li>
  )
}

export default function Collection () {
  const homeData = useSiteData()
  const { collectionsInfo, collection } = useRouteData()
  const groupedPosts = groupPosts(collection.items)
  const background = api.makeImageUrl(collection.imagen, 'directus-large-crop')

  return (
    <CollectionStyles className="page" background={background}>
      <section>
        <nav className="collection-nav">
          <Link className="nav-header" to="/">
            <img className="nav-logo" src="/images/escudo-flat-blanco.png" alt="logo" />
            <h1 className="nav-title">{homeData.titulo}</h1>
          </Link>
          <CollectionLinks collectionsInfo={collectionsInfo} collection={collection} />
        </nav>
        <header className="collection-header container">
          <h1>{collection.titulo}</h1>
          <div className="html-content" dangerouslySetInnerHTML={{ __html: collection.descripcion }}></div>
        </header>
      </section>
      <section className={collection.items.length ? 'collection-posts container card' : 'collection-posts container'}>
        {groupedPosts.map(g => (
          <ul key={g.seccion}>
            <h2>{g.seccion}</h2>
            {g.posts.map(p => <Post post={p} key={p.id} /> )}
          </ul>
        ))}
        <FixedMenu groupedPosts={groupedPosts} />
      </section>
    </CollectionStyles>
  )
}
