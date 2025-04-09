const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // <- Permite ler JSON do body

// Importa as rotas
const produtosRoutes = require('./routes/produtos');

// Rota raiz
app.get('/', (req, res) => {
  res.send('PDV rodando ✅');
});

// Usa o arquivo de rotas
app.use('/produtos', produtosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
