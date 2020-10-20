import React from 'react'
import styled from 'styled-components'

const CategoriesMenuStyles = styled.section`
  padding: 0 16px;
  max-width: 260px;
  margin-top: 3rem;
  margin-left: 16px;
  position: sticky;
  top: 0px;

  @media (max-width: 912px) {
    display: none;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 12px;
    font-size: 22px;
  }

  li {
    margin-bottom: 8px;
    font-size: 14px;
  }

  .category-menu {
    margin-bottom: 2rem;
  }
`

export default function CategoriesMenu ({ groupedPosts }) {
  return (
    <CategoriesMenuStyles className="categories-menu">
      {groupedPosts.map(g => (
        <ul className="category-menu" key={g.subgroup}>
          <h3 className="category-title">{g.subgroup}</h3>
          {g.posts.map(p => (
            <li key={p.id}>
              <a href={`#${p.id}`}>{p.title}</a>
            </li>
          ))}
        </ul>
      ))}
    </CategoriesMenuStyles>
  )
}
