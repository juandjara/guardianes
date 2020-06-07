import React from 'react'
import api from '../../cmsapi'
import { Link } from '@reach/router'
import { useRouteData, useSiteData } from 'react-static'
import CollectionLinks from '../components/CollectionLinks'
import CategoriesMenu from '../components/CategoriesMenu'
import Post from '../components/Post'
import styled from 'styled-components'

const MOBILE_BREAKPOINT = 812;

function groupPosts (posts) {
  const reduced = posts.reduce((acum, elem) => {
    acum[elem.categoria] = acum[elem.categoria] || { categoria: elem.categoria, posts: [] }
    acum[elem.categoria].posts = acum[elem.categoria].posts.concat(elem)
    return acum
  }, {})
  return Object.values(reduced)
}

const CollectionStyles = styled.div`
  min-height: 100vh;

  .background-image {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: 25% 0%;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient);
      opacity: 0.75;
    }
  }

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .html-content {
    line-height: 1.6;
    max-width: 812px;
  }

  .collection-nav {
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .nav-header {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 16px;
    }    
  }

  .nav-logo {
    height: 60px;
    margin-right: 1rem;
  }

  .nav-title {
    font-family: var(--family-serif), serif;
    line-height: 1.15;
    font-size: 2rem;
    margin-top: 8px;
  }

  .collection-header {
    margin-top: 24px;
    margin-bottom: 32px;

    header {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }

    .collection-icon {
      height: 120px;
      margin-right: 12px;
    }

    h1 {
      font-size: 3rem;
      margin: 16px 0;
    }

    .html-content {
      font-size: 18px;
    }
  }

  .collection-posts {
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    max-width: 1160px;
    padding: 0 16px;

    .collection-posts-list {
      flex-grow: 1;
      flex-basis: 0%;

      .category-title {
        font-size: 30px;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }

    .categories-menu {
      flex-grow: 1;
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

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    .card {
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius: 8px;
      background-color: white;
    }

    .collection-links {
      justify-content: center;
    }

    .collection-header header {
      align-items: center;

      .collection-icon {
        height: 80px;
      }

      h1 {
        font-size: 2rem;
      }
    }

    .posts-list {
      margin-top: -24px;
    }    

    .nav-title {
      margin: 0;
    }
  }
`

export default function Collection () {
  const homeData = useSiteData()
  const { collectionsInfo, collection } = useRouteData()
  const groupedPosts = groupPosts(collection.items)
  const background = api.makeImageUrl(collection.imagen, 'directus-large-crop')

  return (
    <CollectionStyles className="page" background={background}>
      <div className="background-image"></div>
      <section>
        <nav className="collection-nav">
          <Link className="nav-header" to="/">
            <img className="nav-logo" src="/images/escudo-flat-blanco.png" alt="escudo guardianes blanco" />
            <h1 className="nav-title">{homeData.titulo}</h1>
          </Link>
          <CollectionLinks collectionsInfo={collectionsInfo} collection={collection} />
        </nav>
        <div className="collection-header container">
          <header>
            <img className="collection-icon" src={collection.icono && api.makeImageUrl(collection.icono, 'thumbnail')} alt="icono" />
            <h1>{collection.titulo}</h1>
          </header>
          <div className="html-content" dangerouslySetInnerHTML={{ __html: collection.descripcion }}></div>
        </div>
      </section>
      <section className="collection-posts">
        <div className="collection-posts-list">
          {groupedPosts.map(g => (
            <ul className="category-posts" key={g.categoria}>
              <h2 className="category-title">{g.categoria}</h2>
              {g.posts.map(p => <Post post={p} key={p.id} /> )}
            </ul>
          ))}
        </div>
        <CategoriesMenu groupedPosts={groupedPosts} />
      </section>
    </CollectionStyles>
  )
}
