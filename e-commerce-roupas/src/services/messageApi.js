const BASE_URL = "http://localhost:5001/contatos";

export const createMessage = async (data) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro ao salvar mensagem.");
  return await response.json();
};

export const deleteMessage = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Erro ao deletar mensagem.");
};
