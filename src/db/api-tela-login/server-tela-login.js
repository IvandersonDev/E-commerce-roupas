const express = require("express");
const fs = require("fs");
const path = require("path"); // Certifique-se de importar o módulo 'path'
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001; // Porta da API
const FILE_PATH = path.resolve(__dirname, "./users/users.json");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para validar login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();

  // Verifica se o usuário existe
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ message: "Login efetuado com sucesso!" });
  } else {
    res.status(401).json({ error: "Credenciais inválidas." });
  }
});

// Função para carregar usuários
const loadUsers = () => {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    console.log("Dados carregados do arquivo JSON:", data);
    return JSON.parse(data || "[]");
  }
  console.log("Arquivo não encontrado, retornando lista vazia.");
  return [];
};

const saveUsers = (users) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
    console.log("Dados salvos com sucesso:", users);
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  }
};

app.get("/users", (req, res) => {
  const users = loadUsers();
  res.json(users);
});

app.post("/users", (req, res) => {
  const { email, password } = req.body;
  const users = loadUsers();
  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ error: "Usuário já registrado." });
  }
  users.push({ email, password });
  saveUsers(users);
  res.status(201).json({ message: "Usuário registrado com sucesso." });
});

app.delete("/users/:email", (req, res) => {
  const { email } = req.params;
  let users = loadUsers();
  const userExists = users.find((user) => user.email === email);
  if (!userExists) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }
  users = users.filter((user) => user.email !== email);
  saveUsers(users);
  res.json({ message: "Usuário excluído com sucesso." });
});

const generateToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

app.post("/recover-password", (req, res) => {
  const { email } = req.body;
  const users = loadUsers();

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ error: "E-mail não encontrado." });
  }

  const token = generateToken();
  const recoveryFilePath = path.resolve(__dirname, `./recovery/${email}.json`);

  if (!fs.existsSync(path.dirname(recoveryFilePath))) {
    fs.mkdirSync(path.dirname(recoveryFilePath), { recursive: true });
  }

  fs.writeFileSync(recoveryFilePath, JSON.stringify({ email, token }, null, 2));

  res.status(200).json({ message: "Token de recuperação gerado com sucesso.", token });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
