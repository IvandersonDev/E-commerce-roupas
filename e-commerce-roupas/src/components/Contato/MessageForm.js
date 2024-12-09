import React, { useReducer } from "react";
import { createMessage } from "../../services/api";

const MessageForm = () => {
  const fields = [
    { type: "text", name: "name", placeholder: "Nome completo" },
    { type: "email", name: "email", placeholder: "E-mail" },
    { type: "text", name: "subject", placeholder: "Assunto" },
  ];

  // Define o reducer para gerenciar o estado do formulário
  const reducer = (state, { name, value }) => ({
    ...state,
    [name]: value,
  });

  // Inicializa o estado do formulário usando o useReducer
  const [formData, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ name, value }); // Atualiza o estado com o novo valor
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.message.trim() === "") throw new Error("Mensagem vazia!");
      await createMessage(formData);
      alert("Mensagem enviada com sucesso!");
      // Reseta o formulário
      dispatch({ name: "name", value: "" });
      dispatch({ name: "email", value: "" });
      dispatch({ name: "subject", value: "" });
      dispatch({ name: "message", value: "" });
    } catch (error) {
      alert("Erro ao enviar mensagem: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]}
          onChange={handleChange}
          required
        />
      ))}
      <textarea
        name="message"
        placeholder="Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MessageForm;
