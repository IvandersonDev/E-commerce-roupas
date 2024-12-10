import React from "react";
import { deleteMessage } from "../../services/messageApi";

const MessageList = ({ messages, onDelete }) => {
  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta mensagem?")) return;
    await deleteMessage(id);
    onDelete();
};


  return (
    <div>
      <h2>Mensagens</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.name}</strong> ({msg.email}): {msg.message}
            <button onClick={() => handleDelete(msg.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
