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

    a {
      display: block;
    }

    &:hover, .selected {
      border-bottom-color: white;
    }

    img {
      height: 45px;
    }
  }
`

export default function CollectionLinks ({ collectionsInfo, collection }) {
  return (
    <CollectionLinksStyles className="collection-links">
      {collectionsInfo.map(s => (
        <li key={s.id} className={`collection-links-item ${s.id === collection.id ? 'selected' : ''}`}>
          <Link to={`/${s.id}`}>
            <img src={s.icono && api.makeImageUrl(s.icono, 'thumbnail')} />
          </Link>
        </li>
      ))}
    </CollectionLinksStyles>
  )
}