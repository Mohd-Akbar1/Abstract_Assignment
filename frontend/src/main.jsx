import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './FormPage/Form.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/form' element={<Form />} />
    <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
)
