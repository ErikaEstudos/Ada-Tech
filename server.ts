import express from "express";
import { config } from "dotenv";
import path from "path";
import { randomUUID } from "crypto";
import { readFileSync, writeFile, writeFileSync } from "fs";
import dbJson from "./server.json";

type User = {
  id: string;
  name: string;
  age: number;
};

type CreateUserDTO = Omit<User, "id">;

config();
const app = express();
app.use(express.json());
app.use("/client", express.static(path.join(__dirname, "public")));
const url = process.env.API_BASE_URL ?? "http://localhost";
const port = process.env.API_PORT ?? 3300;
const dbJsonPath = path.resolve(process.cwd(), "server.json");

const users = dbJson.users;

app.get("/api", (request, response) => {
  response.status(200).send("<h1>Api Base Url</h1>");
});

app.get("/api/users", (request, response) => {
  response.json(users);
});

app.post("/api/users", (request, response) => {
  const { name, age }: CreateUserDTO = request.body;
  if (!name || age < 0) {
    const errMessage = "O usuário a ser criado precisa de nome e idade";
    response.status(400).send(errMessage);
  }

  const user = { id: randomUUID(), name, age };

  users.push(user);

  writeFileSync(dbJsonPath, JSON.stringify({ ...dbJson, user }));

  response.status(201).json(user);
});

app.delete("/api/users/:id", (request, response) => {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    response.status(404).json({ error: "Usuário não encontrado." });
  }

  users.splice(userIndex, 1);

  writeFileSync(dbJsonPath, JSON.stringify({ ...dbJson, users }));

  response.status(200).json({ message: "Usuário deletado com sucesso." });
});

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
