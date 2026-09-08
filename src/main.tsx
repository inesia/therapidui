import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Resume from './pages/Resume.tsx'
import ResumeId from './pages/ResumeId.tsx'
import CoverLetter from './pages/CoverLetter.tsx'
import Portfolio from './pages/Portfolio.tsx'

function Root() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (path === '/resume') return <Resume />;
  if (path === '/resume-id') return <ResumeId />;
  if (path === '/cover-letter') return <CoverLetter />;
  if (path === '/portfolio' || path.startsWith('/portfolio/')) return <Portfolio />;
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

