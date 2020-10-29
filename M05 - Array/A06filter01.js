//Serve para filtrar um array percorrendo e retirando os elementos desejados.
const produtos = [
    {nome: 'nootbook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.99, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(elementos){ /*retorna true ou false, cria um novo array onde os elementos que retornaram true estaram 
    presentes e os que retornaram false seram retirados.*/
    return elementos.fragil == false
}))/*a funçao filter pode receber 3 parametros o valor do elemento, pode receber
o indice e pode receber o array completo*/

let produtosFrageis = elemento => elemento.fragil //Como o filter retona true ou false nao precisa dfinir se (fragil == a true ou false)
let produtosAcimaDe = elemento => elemento.preco >= 500
let listaFinal = produtos.filter(produtosFrageis).filter(produtosAcimaDe)
console.log(listaFinal)