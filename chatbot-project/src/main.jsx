import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* strictmode basically gives us somme additional checks and warinings when devloping an APP */}
    <App />
  </StrictMode>,
)
