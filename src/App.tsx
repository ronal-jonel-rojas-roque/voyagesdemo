import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/home/home';
import './styles/index.css';
import ErrorPage from './components/errorpage/ErrorPage';

function App() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/voyagesdemo') {
      window.location.href = '/voyagesdemo/home';
    }
  }, [location.pathname]);
  return (
    <div>
      <Routes>
        <Route path="/voyagesdemo" element={<Home />} />
        <Route path="/voyagesdemo/home" element={<Home />} />
        <Route path="/voyagesdemo/error" element={<ErrorPage />} />
        <Route path="/voyagesdemo/*" element={<Navigate to="/error" />} />
      </Routes>
    </div>
  );
}

export default App;
