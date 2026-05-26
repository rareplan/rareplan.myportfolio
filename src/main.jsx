import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App.jsx'
import CanvaPage from './page/canva.jsx'
import QcreditPage from './page/qcredit.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<App />} />
        <Route path="/canva"element={<CanvaPage />} />
       <Route path="/qcredit-ads" element={<QcreditPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)