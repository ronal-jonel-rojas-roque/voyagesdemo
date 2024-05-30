import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import './styles/index.css';
import ErrorPage from './components/errorpage/ErrorPage';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </div>
  );
}

export default App;
