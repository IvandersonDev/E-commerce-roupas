import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RecuperarSenha from "./components/RecuperarSenha";
import Registro from "./components/Registro";
import CadastroProduto from "./pages/CadastroProduto";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import SupplierList from "./components/SupplierList";
import Contact from "./components/Contact"

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <Banner />
      <ProductList />
    </div>
  );
}

function Fornecedores() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <main>
        <div className="banner">
          <h1>FORNECEDORES</h1>
        </div>
        <SupplierList />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fornecedores" element={<Fornecedores />} /> {/* Nova rota */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
