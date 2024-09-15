import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
