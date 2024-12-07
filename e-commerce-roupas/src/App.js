import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecuperarSenha from "./components/RecuperarSenha";
import Registro from "./components/Registro";
import CadastroProduto from "./pages/CadastroProduto";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* Nova rota para a página principal */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
