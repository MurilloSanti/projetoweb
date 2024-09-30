import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from '../src/paginas/Cadastro/Cadastro';
import Login from '../src/paginas/Login/Login';
import Principal from '../src/paginas/Principal/Principal';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  </Router>
);

export default AppRoutes;