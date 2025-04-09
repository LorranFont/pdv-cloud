const produtos = [
    { id: 1, nome: 'Coca-Cola', preco: 5.99, quantidade: 10 },
    { id: 2, nome: 'Pastel de carne', preco: 4.5, quantidade: 25 },
    { id: 3, nome: 'Suco de laranja', preco: 3.75, quantidade: 15 }
  ];
  
  // GET - Listar todos os produtos
  const listarProdutos = (req, res) => {
    res.json(produtos);
  };

  // POST - Adicionar novo produto
  const adicionarProduto = (req, res) => {
    const { nome, preco, quantidade } = req.body;

    if (!nome || !preco || !quantidade) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos!'});
    };

    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);

};

// GET - Buscar produto por ID
const buscarProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find ( p => p.id === id);

    if (!produto) {
        return res.status(404).json ({ mensagem: 'Produto não encontrado!' });
    }

    res.json(produto);
}

//PUT - Atualizar produto por ID
const atualizarProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, preco, quantidade } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!'});
    }

    if (!nome || !preco || !quantidade) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos!' });
    }

    produtos[produtoIndex] = { id, nome, preco, quantidade };
    res.json(produtos[produtoIndex]);
};

// DELETE - Remover produto por ID
const removerProduto = (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' });
    }

    const removido = produtos.splice(index, 1);
    res.json({ mensagem: 'Produto removido com sucesso!', removido });
};
  
module.exports = {
    listarProdutos,
    adicionarProduto,
    buscarProduto,
    atualizarProduto,
    removerProduto
  };
  