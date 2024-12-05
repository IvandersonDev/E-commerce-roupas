
import React, { useState } from 'react';
import Input from '../components/Input';  // Componente genérico de Input
import '../css/cadastroProdutos.css';  // Corrigido para o caminho correto
import Menu from '../components/Menu';  // Importando o Menu aqui

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [codigo, setCodigo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const validarPreco = (preco) => {
    return /^\d+(\.\d{1,2})?$/.test(preco);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !descricao || !preco || !codigo || !categoria || !imagem || !quantidade) {
      setMensagemErro('Todos os campos são obrigatórios.');
      return;
    }

    if (!validarPreco(preco)) {
      setMensagemErro('Preço inválido. Use o formato correto (ex: 50,00).');
      return;
    }

    setMensagem('Produto inserido com sucesso!');
    setMensagemErro('');
    setNome('');
    setDescricao('');
    setPreco('');
    setCodigo('');
    setCategoria('');
    setImagem(null);
    setQuantidade(1);
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
      {/* Menu será exibido apenas nessa página */}
      <Menu />

      <h2>Cadastro de Produto</h2>

      {mensagem && <div className="success-message">{mensagem}</div>}
      {mensagemErro && <div className="error-message">{mensagemErro}</div>}

      <form onSubmit={handleSubmit} className="form">
        {/* Lado Esquerdo */}
        <div className="left-section">
          <Input label="Nome do Produto" value={nome} onChange={(e) => setNome(e.target.value)} required />
          <Input label="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required type="textarea" />
          <Input label="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} required placeholder="Exemplo: 50,00" />
          <Input label="Código de Barras" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
        </div>

        {/* Lado Direito */}
        <div className="right-section">
          <div className="form-group">
            <label>Categoria</label>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
              <option value="">Selecione...</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="infantil">Infantil</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Imagem</label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              required
            />
            {imagem && <img src={imagem} alt="Preview" className="image-preview" />}
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>Salvar e Adicionar</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
