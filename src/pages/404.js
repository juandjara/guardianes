import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1, p {
    margin: 0;
  }

  .back-link {
    color: white;
    margin-top: 1rem;
    font-size: 16px;
    opacity: 0.8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      opacity: 1;
    }
  }
`

export default function NotFound () {
  return (
    <NotFoundStyle className="page not-found">
      <h1>404 - Aquí no hay nada</h1>
      <Link className="back-link" to="/">Volver</Link>
    </NotFoundStyle>
  )
}
