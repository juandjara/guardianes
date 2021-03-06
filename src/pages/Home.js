import React from 'react'
import SectionIcons from '../components/SectionIcons'
import Social from '../components/Social'
import { useRouteData, useSiteData } from 'react-static'
import styled from 'styled-components'
import dataService from '../../dataService'

const HomeStyles = styled.div`
  main {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .nav-header {
    font-family: Bree Serif, serif;
  }

  nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  nav .nav-logo {
    padding: 1rem;
    height: 92px;
  }

  nav header {
    margin-top: 6px;
    flex-grow: 1;
  }

  nav header .title {
    line-height: 1.15;
    font-size: 42px;
    margin: 0;
  }

  nav header .subtitle {
    font-size: 20px;
    margin: 0;
  }

  nav .social {
    margin-top: 8px;
    margin-right: 16px;
  }

  .section-icons.right {
    max-width: min(100vw, 628px);
  }

  .description {
    max-width: 628px;
    margin: 0 24px;
    font-size: 18px;
    line-height: 1.66;
  }

  .cta {
    margin: 16px 24px;
  }

  .cta-first {
    margin-right: 16px;
  }

  .cta-separator {
    margin: 0 16px;
  }

  .cta-btn {
    font-size: 18px;
    border-radius: 16px;
    border: none;
    padding: 12px 18px;
    margin: 8px 0;
    background-color: #f0f0f0;
    color: #ad1926;
    cursor: pointer;
    transition: opacity 0.25s ease;
  }

  .cta-btn.primary {
    font-size: 20px;
    padding: 16px 24px;
  }

  .cta-btn.outline {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 10px 18px;
  }

  .cta-btn:hover {
    opacity: 0.9;
  }

  .carrousel {
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    max-width: 55%;
    min-width: 280px;
    overflow: hidden;
    min-height: 100vh;
    clip-path: polygon(0px 0%, 100% 0%, 100% 100%, 140px 100%);
  }

  .carrousel img {
    max-width: none;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 812px) {
    nav {
      display: block;
    }

    nav header {
      margin: 0 16px;
    }
  }
`

const Home = () => {
  const homeData = useSiteData()
  const { collectionsInfo } = useRouteData()

  return (
    <HomeStyles className="home">
      <main>
        <nav>
          <img className="nav-logo" src={dataService.makeImageUrl(homeData.logo)} alt="escudo guardianes blanco" />
          <header className="nav-header">
            <h1 className="title"> {homeData.title} </h1>
            <p className="subtitle"> {homeData.tagline} </p>
          </header>
          <Social className="home" />
        </nav>
        <SectionIcons items={collectionsInfo} className="right" />
        <section className="copy">
          <div className="description" dangerouslySetInnerHTML={{ __html: homeData.description }}></div>  
          <p className="cta">
            <strong className="cta-first">¿Quieres saber más?</strong>
            <span className="cta-inner">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl-4GADkcibRnVLn7jKeGfjrSvZmuHe32QWaY3YbTV-9VW5g/viewform?c=0&w=1">
                <button className="cta-btn primary">Apúntate a la asociación</button>
              </a>
            </span>
          </p>
        </section>
      </main>
      <div className="carrousel">
        <img src={dataService.makeImageUrl(homeData.background_image)} />
      </div>
    </HomeStyles>
  )
}

export default Home
