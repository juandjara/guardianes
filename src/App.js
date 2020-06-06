import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import Loading from './components/Loading'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <Root>
      <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
