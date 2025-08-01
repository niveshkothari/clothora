import React from 'react'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/Shopcontext.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  /* </StrictMode> */
)
