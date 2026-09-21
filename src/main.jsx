import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'

const isMobile =
  typeof navigator !== 'undefined' &&
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)

setTimeout(() => {
  document.getElementById('static-hero')?.remove();
}, 100);
