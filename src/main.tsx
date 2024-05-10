import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootLayout from './pages/layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout />
  </React.StrictMode>,
)
