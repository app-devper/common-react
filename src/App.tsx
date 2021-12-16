import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from './presentation/auth/AuthPage';
import Container from './Container';

function App() {
  const container = new Container()
  return (
    <div className="app-container d-flex container-fluid">
      <Routes>
        <Route path="/" element={<AuthPage container={container}/>}/>
      </Routes>
    </div>
  );
}

export default App;
