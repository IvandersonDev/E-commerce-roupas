// src/components/AddProductForm/AddProductForm.js
import React, { useState } from 'react';
import FormField from '../FormField/FormField';
import Message from '../Message/Message';
import { validateForm } from '../../utils/validators';
import { saveProduct } from '../../services/productService';
import './AddProductForm.css';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    code: '',
    category: 'feminino',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setLoading(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      await saveProduct(formData);
      setSuccessMessage('O produto foi inserido com sucesso!');
      setLoading(false);
      setFormData({
        name: '',
        description: '',
        price: '',
        code: '',
        category: 'feminino',
        image: null,
      });
      setErrors({});
    } catch (error) {
      setLoading(false);
      setSuccessMessage('Erro ao adicionar o produto. Tente novamente.');
    }
  };

  return (
    <div className="add-product-form">
      <h2>Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
        />
        <FormField
          label="Preço:"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          error={errors.price}
        />
        <FormField
          label="Código de Barras:"
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
          error={errors.code}
        />
        <div>
          <label>Categorias:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="file"
            accept="image/jpg, image/png"
            onChange={handleImageChange}
            required
          />
          {errors.image && <span style={{ color: 'red' }}>{errors.image}</span>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Salvando...' : 'Salvar e Adicionar'}
        </button>
      </form>

      {successMessage && <Message text={successMessage} />}
    </div>
  );
};

export default AddProductForm;
