import React,{useState} from 'react'
import './app.scss'
import { Birds } from './components/birds'
import Footer from './components/footer'

import Home from './components/home'


function App() {
  return (
    <div>
    <div className="page" id="home">
      <Home/>
    </div>
    <div className="page" id="bird">
      <Birds/>
    </div>
    <div className="page">
      <Footer/>
    </div>
    
    </div>
  )
}

export default App
