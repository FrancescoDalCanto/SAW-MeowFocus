import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './MeowFocu_home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeowFocu_home />
  </StrictMode>,
)