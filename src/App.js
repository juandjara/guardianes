import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Router } from '@reach/router'

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<p style={{ padding: '2rem', textAlign: 'center' }}>Loading...</p>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
