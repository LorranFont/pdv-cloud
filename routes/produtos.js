const express = require('express');
const router = express.Router();
const {
  listarProdutos,
  adicionarProduto,
  buscarProduto,
  atualizarProduto,
  removerProduto
} = require('../controllers/produtosController');

// GET /produtos
router.get('/', listarProdutos);

// POST /produtos
router.post('/', adicionarProduto);

// GET /produtos/:id
router.get('/:id', buscarProduto);

// PUT /produtos/:id
router.put('/:id', atualizarProduto);

// DELETE /produtos/:id
router.delete('/:id', removerProduto);

module.exports = router;
