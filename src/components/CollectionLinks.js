import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import api from '../../cmsapi'

const CollectionLinksStyles = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  .collection-links-item {
    padding-bottom: 8px;
    border-bottom: 3px solid transparent;
    margin: 0 8px;
    text-align: center;
    position: relative;

    a {
      display: block;
    }

    &:hover, &.selected {
      border-bottom-color: white;
    }

    &:hover, &:focus {
      .tooltip {
        opacity: 1;
      }
    }

    img {
      height: 45px;
    }

    .tooltip {
      position: absolute;
      top: 100%;
      left: 50%;
      right: none;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
      min-width: 120px;
      margin-top: 16px;
      background-color: rgba(0,0,0, 0.5);
      border-radius: 8px;
      padding: 4px 8px;
    }
  }
`

export default function CollectionLinks ({ collections, selected }) {
  return (
    <CollectionLinksStyles className="collection-links">
      {collections.map(c => (
        <li key={c.id} className={`collection-links-item ${c.id === selected ? 'selected' : ''}`}>
          <Link to={`/${c.id}/${c.title}`}>
            <img src={c.icon && api.makeImageUrl(c.icon)} />
            <span className="tooltip">{c.title}</span>
          </Link>
        </li>
      ))}
    </CollectionLinksStyles>
  )
}