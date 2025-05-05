# 🚀 Fastify API Boilerplate

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/seu-usuario/seu-repo/ci.yml?branch=main)

> API RESTful criada com Fastify + TypeScript, estruturada para escalabilidade, segurança e facilidade de manutenção.

---

## 📋 Descrição

Este projeto é uma API backend desenvolvida com [Fastify](https://www.fastify.io/) e [TypeScript](https://www.typescriptlang.org/), com foco em performance, validação de dados, estrutura limpa e boas práticas de desenvolvimento.

---

## ✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (opcional, para testes com banco de dados local)

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente criando um arquivo .env baseado em .env.example:
```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/seubanco
JWT_SECRET=uma_chave_segura
```

## ▶️ Execução em Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 📁 Estrutura de Pastas
```
src/
├── app.ts               # Ponto de entrada da aplicação
├── server.ts            # Inicialização do servidor Fastify
├── routes/              # Definição de rotas
│   └── user.route.ts
├── controllers/         # Controladores de lógica de negócios
│   └── user.controller.ts
├── services/            # Camada de serviços (negócios)
│   └── user.service.ts
├── models/              # Modelos e interfaces
│   └── user.model.ts
├── schemas/             # Schemas de validação com Zod/TypeBox
├── middlewares/         # Middlewares (auth, error handler)
├── plugins/             # Plugins de banco, auth, etc
├── utils/               # Funções utilitárias
└── config/              # Configurações da aplicação
```

## 🧰 Tecnologias Utilizadas
| Tecnologia    | Descrição                                      |
| ------------- | ---------------------------------------------- |
| Fastify       | Framework web leve e altamente performático    |
| TypeScript    | Superset do JavaScript com tipagem estática    |
| PostgreSQL    | Banco relacional robusto e confiável           |
| Prisma        | ORM moderno para TypeScript e Node.js          |
| Zod / TypeBox | Validação de dados com inferência de tipos     |
| JWT           | Autenticação baseada em tokens                 |
| Docker        | Containerização do ambiente de desenvolvimento |


## 📄 Licença
Este projeto está licenciado sob a licença MIT.