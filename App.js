// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './paginas/Cadastro/Cadastro';
import Login from './paginas/Login/Login';
import Principal from './paginas/Principal/Principal';
import AppRoutes from './Routes';
const App = () => {
  return (
    <AppRoutes>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </div>
    </AppRoutes>
  );
};

export default App;

