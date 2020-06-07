import React from 'react'
import cmsapi from '../../cmsapi'
import { Link } from '@reach/router'
import styled from 'styled-components'

const SectionIconsStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: 16px 8px;
  justify-content: center;
  align-content: center;
  margin-top: 32px;
  margin-bottom: 24px;

  li {
    text-align: center;
    text-transform: uppercase;
    box-sizing: content-box;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: opacity 0.25s ease;
  }

  li:hover img {
    opacity: 0.75;
  }

  img {
    display: block;
    width: 75px;
    height: auto;
    margin: 0 auto;
  }
`

const SectionIcons = ({ pages, className }) => (
  <SectionIconsStyles className={`section-icons ${className}`}>
    {pages.map(p => (
      <li key={p.coleccion}>
        <Link to={`/${p.coleccion || ''}`}>
          <img src={p.icono && cmsapi.makeImageUrl(p.icono, 'thumbnail')} />
          <p>{p.titulo}</p>
        </Link>
      </li>
    ))}
  </SectionIconsStyles>
)

export default SectionIcons
