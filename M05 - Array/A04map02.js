const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]
    
//Retornar um array apenas com os preços
let resultado = carrinho.map(function (elemento){
    let objCarrinho = JSON.parse(elemento)
    return objCarrinho.preco
})
console.log(resultado)

//pode ser feito com arrow function
const paraObjeto = json => JSON.parse(json)
const apenasPreco = obj => obj.preco
const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)