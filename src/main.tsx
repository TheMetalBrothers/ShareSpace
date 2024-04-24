import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/main.scss'
import { ClerkProvider } from '@clerk/clerk-react'
 
// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_ZmxlZXQtcHVtYS03Ny5jbGVyay5hY2NvdW50cy5kZXYk";
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)