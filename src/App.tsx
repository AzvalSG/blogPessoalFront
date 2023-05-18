import React from 'react';
import './App.css'
import Footer from './componentes/estaticos/footer/Footer'
import Navbar from './componentes/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
