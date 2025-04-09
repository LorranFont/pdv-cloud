# PDV Cloud

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 💻 Sobre o Projeto

Este é um sistema simples de PDV (Ponto de Venda) desenvolvido com **Node.js** e **Express**. Ele permite o gerenciamento de produtos com as operações básicas de um CRUD:

- Listar produtos (`GET /produtos`)
- Adicionar produto (`POST /produtos`)
- Atualizar produto (`PUT /produtos/:id`)
- Deletar produto (`DELETE /produtos/:id`)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/LorranFont/pdv-cloud.git

# Entre na pasta do projeto
cd pdv-cloud

# Instale as dependências
npm install

# Inicie o servidor
node index.js

📫 Rotas da API
Método	Rota	Descrição
GET	/produtos	Lista todos os produtos
POST	/produtos	Adiciona um novo produto
PUT	/produtos/:id	Atualiza um produto
DELETE	/produtos/:id	Remove um produto
🧠 Tecnologias usadas
Node.js

Express

JavaScript

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com 💙 por Lorran Fontes