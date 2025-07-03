import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateEffectHooksApp from "./StateEffectHooks/StateEffectHooksApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateEffectHooksApp />
  </StrictMode>,
)
