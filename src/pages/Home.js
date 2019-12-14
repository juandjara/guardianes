import React from 'react'
import Sections from '../components/Sections'
import SectionIcons from '../components/SectionIcons'
import Social from '../components/Social'
import Footer from '../components/Footer'
import HeadConfig from '../components/HeadConfig'
import { useRouteData } from 'react-static'

const Home = () => {
  const { sections } = useRouteData() 
  return (
    <div className="home">
      <HeadConfig />
      <Social className="social-top" />
      <div className="landing-section">
        <main>
          <header className="display-font">
            <h1 className='title'>Asociación Guardianes</h1>
            <p className='description'>
              Eventos culturales de ocio alternativo
            </p>
          </header>
          <SectionIcons pages={sections} />
          <div className="cta">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl-4GADkcibRnVLn7jKeGfjrSvZmuHe32QWaY3YbTV-9VW5g/viewform?c=0&w=1">
              <button className="cta-btn primary">Apúntate a la asociación</button>
            </a>
            <span>ó</span>
            <a href="mailto:asociacion.guardianes@gmail.com">
              <button className="cta-btn outline">
                Contáctanos
              </button>
            </a>
          </div>
        </main>
        <img className="site-logo" src="/images/escudo-flat-blanco.png" alt="logo" />
      </div>
      <Sections pages={sections} />
      <div className="below-sections">
        <p className="more display-font">Pero aún hacemos más cosas...</p>
        <p>¿Quieres saber más?</p>
        <div className="cta">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfl-4GADkcibRnVLn7jKeGfjrSvZmuHe32QWaY3YbTV-9VW5g/viewform?c=0&w=1">
            <button className="cta-btn primary">Apúntate a la asociación</button>
          </a>
          <span>ó</span>
          <a href="mailto:asociacion.guardianes@gmail.com">
            <button className="cta-btn outline">
              Contáctanos
            </button>
          </a>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .home {
          color: white;
          background: linear-gradient(120deg, #8b1f27, #c41525);
        }
  
        .landing-section {
          max-width: 1160px;
          padding-top: 80px;
          padding-bottom: 40px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          min-height: 100vh;
        }
  
        header {
          text-align: center;
        }
  
        header .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 48px;
        }
  
        header .description {
          font-size: 24px;
          margin: 0;
        }
  
        main, .site-logo {
          flex: 1 1 auto;
          padding: 1rem;
          max-width: 50%;
        }
  
        .cta {
          margin-top: 3rem;
          text-align: center;
        }
  
        .cta-btn {
          font-size: 18px;
          border-radius: 24px;
          border: none;
          padding: 12px 18px;
          margin: 1rem;
          background-color: #f0f0f0;
          color: #ad1926;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }
  
        .cta-btn.primary {
          font-size: 20px;
          padding: 16px 24px;
          border-radius: 32px;
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
  
        @media (max-width: 600px) {
          .site-logo {
            order: 1;
            max-width: 95vw;
          }
          main {
            order: 2;
            max-width: none;
          }
          .cta span {
            display: none;
          }
        }
  
        :global(.social.social-top) {
          position: absolute;
          top: 0;
          right: .5rem;
        }
  
        .below-sections {
          text-align: center;
        }
  
        .more {
          font-size: 48px;
          font-style: italic;
        }
  
        .more + p {
          font-size: 24px;
          margin-bottom: 8px;
        }
  
        .below-sections .cta {
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

export default Home
