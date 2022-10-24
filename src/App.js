import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Promocoes from  './pages/Promocoes'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/promocoes" element={<Promocoes/>} />
    </Routes>
  );
}

export default App;
