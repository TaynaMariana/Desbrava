# Backend - Desbrava

Este é o backend do aplicativo **Desbrava**, desenvolvido com **Node.js**, **Express**, **Prisma ORM** e **SQLite**.  
Ele fornece uma API RESTful que será consumida pelo frontend em React Native com Expo.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

---

## ⚙️ Como rodar o backend localmente

### 1. Clone o repositório e entre na pasta do backend

```bash
cd desbrava-backend

## 2. Instale as dependências

npm install

## 3. Crie o arquivo .env com a configuração do banco SQLite

Na raiz do projeto, crie um arquivo .env
Use de exmplo o arquivo .env.example

## 4. Gere o banco de dados e as tabelas com Prisma

```bash
npx prisma migrate dev --name init

Este comando cria o arquivo do banco e aplica o schema com as tabelas do projeto.

## 5. Rode o servidor

npm run dev

O backend será iniciado em:
http://localhost:3000


## Testando a API

Você pode usar o Prisma Studio para visualizar e editar os dados do banco de forma visual:

```bash
npx prisma studio

A interface abrirá em http://localhost:5555

## Endpoints disponíveis

Usuários
GET /usuarios → Lista todos os usuários
POST /usuarios → Cria um novo usuário

Pontos Turísticos
GET /pontos
POST /pontos

Feedbacks
GET /feedbacks
POST /feedbacks

Visitas
GET /visitas
POST /visitas

Conquistas
GET /conquistas
POST /conquistas