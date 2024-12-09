import React, { useReducer, useState } from "react";
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

  // Estado para armazenar mensagens de sucesso ou erro
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ name, value }); // Atualiza o estado com o novo valor
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.message.trim() === "") throw new Error("Mensagem vazia!");
      await createMessage(formData);
      setFeedback({ type: "success", message: "Mensagem enviada com sucesso!" });
      // Reseta o formulário
      dispatch({ name: "name", value: "" });
      dispatch({ name: "email", value: "" });
      dispatch({ name: "subject", value: "" });
      dispatch({ name: "message", value: "" });
    } catch (error) {
      setFeedback({ type: "error", message: "Erro ao enviar mensagem: " + error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>

      {/* Feedback visual */}
      {feedback.message && (
        <p
          role="alert"
          className={feedback.type === "success" ? "feedback-success" : "feedback-error"}
        >
          {feedback.message}
        </p>
      )}

      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.placeholder}</label>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            required
            aria-label={`Campo para inserir seu ${field.placeholder.toLowerCase()}`}
          />
        </div>
      ))}

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escreva sua mensagem aqui"
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Campo para inserir sua mensagem"
        ></textarea>
      </div>

      <button type="submit" aria-label="Enviar mensagem">Enviar</button>
    </form>
  );
};

export default MessageForm;
