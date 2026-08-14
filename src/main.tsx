import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PañolPage } from './features/pañol/PañolPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PañolPage />
  </StrictMode>,
)
