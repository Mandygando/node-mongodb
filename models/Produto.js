const mongoose = require('mongoose')

const Produtoschema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Produto = mongoose.model('Produto', Produtoschema)

module.exports = Produto