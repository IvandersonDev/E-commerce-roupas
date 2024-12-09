import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Input from '../components/Input';
import Menu from '../components/Menu';
import '../css/cadastroProdutos.css';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [codigo, setCodigo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState(undefined);
  const [quantidade, setQuantidade] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const validarPreco = (preco) => /^\d+(\.\d{1,2})?$/.test(preco);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!nome || !descricao || !preco || !codigo || !categoria || !imagem || !quantidade) {
      setMensagemErro('Todos os campos são obrigatórios.');
      return;
    }
    if (!validarPreco(preco)) {
      setMensagemErro('Preço inválido. Use o formato correto (ex: 50,00).');
      return;
    }

    const novoProduto = {
      nome,
      descricao,
      preco,
      codigo,
      categoria,
      quantidade,
      imagem,
    };

    try {
      const response = await fetch('http://localhost:5000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        setMensagem('Produto inserido com sucesso!');
        setMensagemErro('');
        setNome('');
        setDescricao('');
        setPreco('');
        setCodigo('');
        setCategoria('');
        setImagem(undefined);
        setQuantidade(1);
        return;
      }
  
      const errorMessage = `Erro: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
      setMensagemErro(error.message || 'Erro ao salvar o produto no servidor.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png') && file.size <= 5000000) {
      setImagem(URL.createObjectURL(file));
    } else {
      setMensagemErro('Imagem inválida. Apenas JPG ou PNG, até 5MB.');
    }
  };

  return (
    <div className="form-container">
      <Helmet>
        <title>Adicionar Produto</title>
      </Helmet>
      <Menu />
      <h2>Cadastro de Produto</h2>
      {mensagem && <div className="success-message">{mensagem}</div>}
      {mensagemErro && <div className="error-message">{mensagemErro}</div>}
      <form onSubmit={handleSubmit} className="form">
        {/* Lado Esquerdo */}
        <div className="left-section">
          <div className="form-group">
            <label htmlFor="nomeProduto">Nome do Produto</label>
            <input
              id="nomeProduto"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricaoProduto">Descrição</label>
            <textarea
              id="descricaoProduto"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              className="input-field"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="precoProduto">Preço</label>
            <input
              id="precoProduto"
              type="text"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
              placeholder="Exemplo: 50,00"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="codigoProduto">Código de Barras</label>
            <input
              id="codigoProduto"
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
              className="input-field"
            />
          </div>
        </div>

        {/* Lado Direito */}
        <div className="right-section">
          <div className="form-group">
            <label htmlFor="categoriaProduto">Categoria</label>
            <select
              id="categoriaProduto"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="input-field"
            >
              <option value="">Selecione...</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="infantil">Infantil</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantidadeProduto">Quantidade</label>
            <input
              id="quantidadeProduto"
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="imagemProduto">Imagem</label>
            <input
              id="imagemProduto"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              required
              className="input-field"
            />
            {imagem && <img src={imagem} alt="Preview" className="image-preview" />}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Salvar e Adicionar
        </button>
      </form>
    </div>
  );
};

export default CadastroProduto;
