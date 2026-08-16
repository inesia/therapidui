import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Resume from './pages/Resume.tsx'
import ResumeId from './pages/ResumeId.tsx'

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/resume' ? <Resume /> : path === '/resume-id' ? <ResumeId /> : <App />}
  </StrictMode>,
)
