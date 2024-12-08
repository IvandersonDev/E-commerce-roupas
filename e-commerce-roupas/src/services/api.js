import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/', // URL do json-server
});

// Função para criar uma mensagem
export const createMessage = async (data) => {
  try {
    const response = await api.post('/messages', data); // Supondo que "messages" seja a rota no json-server
    return response.data;
  } catch (error) {
    console.error('Erro ao criar mensagem:', error);
    throw error;
  }
};

// Função para deletar uma mensagem
export const deleteMessage = async (id) => {
  try {
    const response = await api.delete(`/messages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar mensagem:', error);
    throw error;
  }
};

// Exportação padrão continua como a instância do axios
export default api;
