import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/custom.scss'
import './styles/all.css'
import './styles/main.css'
import './styles/TextoAnimado.css'
import './styles/header.css'
import App from './App.jsx'
import './scripts/header.js'
import './scripts/card.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
