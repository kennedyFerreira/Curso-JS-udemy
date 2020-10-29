function criarProduto(produto, preco, desconto = 0.1){ /*E a forma de dar parametros para retornar os objetos 
com varias funçao agrupadas.*/
    return{
        produto,
        preco,
        desconto,
    }
}
console.log(criarProduto('notebook', 1000))
console.log(criarProduto('iPad', 500, 0.2))
