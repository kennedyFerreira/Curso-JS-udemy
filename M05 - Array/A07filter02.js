//uma implementaçao para filter, como a funcao dele funciona.
Array.prototype.filter2 = function(callback){
    let newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this) == true){
        newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'nootbook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.99, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

let produtosFrageis = elemento => elemento.fragil //Como o filter retona true ou false nao precisa definir se (fragil == a true ou false)
let produtosAcimaDe = elemento => elemento.preco >= 500
let listaFinal = produtos.filter2(produtosFrageis).filter2(produtosAcimaDe)
console.log(listaFinal)