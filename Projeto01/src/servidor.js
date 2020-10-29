const porta = 3003 /*A porta é um processo dentro de um coputador, cada processo que necessita de uma comunicaçao 
com rede necessita de uma porta, a porta nada mais é do que a forma de selecao de qual processo vai atender a uma 
requisiçao.*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => { // uma funçao middleware
    res.send(bancoDeDados.getProdutos())//send e um funcao que vai enviar a responta 'res', vai converter para Json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //vai gerar um Json para ir para web.
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //vai gerar um Json para ir para web.
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //vai gerar um Json para ir para web.
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})
