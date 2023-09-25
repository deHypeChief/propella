import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
