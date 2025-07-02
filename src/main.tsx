import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutingApp from './RoutingApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutingApp />
  </StrictMode>,
)
