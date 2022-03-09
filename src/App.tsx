import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Container'
import { LoginComponent } from './presentation/auth/view/LoginComponent'

const App = () => {
  const container = new Container()
  return (
    <div className="app-container d-flex container-fluid">
      <Routes>
        <Route path="/" element={<LoginComponent container={container}/>}/>
      </Routes>
    </div>
  )
}

export default App
