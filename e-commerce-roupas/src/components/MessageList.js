import React from "react";
import { deleteMessage } from "../services/api";

const MessageList = ({ messages, onDelete }) => {
  const handleDelete = async (id) => {
    await deleteMessage(id);
    onDelete(); // Atualiza a lista de mensagens
  };

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.name}</strong> ({msg.email}): {msg.message}
            <button onClick={() => handleDelete(msg.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
