import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/all.css'
import '../styles/header.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
