import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Investors from './pages/investors'
import Auth from './pages/auth'
import Roadmap from './pages/roadmap'
import SignPage from './pages/authPages/signup'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/investors' element={<Investors/>}></Route>
        <Route path='/onboarding'>
          <Route index element={<Auth/>}/>
          <Route path='signup' element={<SignPage/>}/>
        </Route>
        <Route path='/roadmap' element={<Roadmap/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


// make a global state for themes