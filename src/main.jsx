import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModeProvider } from './components/ModeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeProvider>
    <App />
    </ModeProvider>
  </StrictMode>,
)
