import api from './api';

export const getProdutos = async () => {
  try {
    const response = await api.get('/produtos');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos', error);
    throw error;
  }
};

export const addProduto = async (produto) => {
  try {
    const response = await api.post('/produtos', produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar produto', error);
    throw error;
  }
};
