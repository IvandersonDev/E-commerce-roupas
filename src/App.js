import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecuperarSenha from "./components/RecuperarSenha";
import Registro from "./components/Registro";
import CadastroProduto from "./pages/CadastroProduto";  // Importação corrigida
import Menu from "./components/Menu";  // Importação do componente de Menu

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
