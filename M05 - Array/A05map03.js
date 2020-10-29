//uma implementaçao para map, como a funcao dele funciona.
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]
    
const paraObjeto = json => JSON.parse(json)
const apenasPreco = obj => obj.preco
const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado2)