import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import ListaTema from './componentes/temas/listatema/Listatema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
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
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
