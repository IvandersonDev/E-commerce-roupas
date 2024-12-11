import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecuperarSenha from "./components/RecuperarSenha";
import Registro from "./components/Registro";
import CadastroProduto from "./pages/CadastroProduto";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import SupplierList from "./components/SupplierListSection";
import Contact from "./components/Contato/Contact";
import Menu from "./components/Menu"; // Importação corrigida
import ProductsPage from "./pages/ProductsPage"; // Ajustado o caminho
 // Importação da nova página

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Banner />
      <ProductList />
    </div>
  );
 };

 function Fornecedores() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Menu /> {/* Adiciona o Menu */}
      <main>
        <div className="banner">
          <h1>FORNECEDORES</h1>
        </div>
        <SupplierList />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/produtos" element={<ProductsPage />} /> {/* Nova rota */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
