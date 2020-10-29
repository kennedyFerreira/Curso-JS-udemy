function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) + (1 + imposto)}`
}
const produto = {
    nome: 'notbook',
    preco: 3000,
    desc: 0.15,
    getPreco //para um chamada de funçao por objeto a funçao correspondente deve estar dentro do objeto
}
const carro = {
    preco: 5000,
    desc: 0.1,
    getPreco
}
console.log(produto.getPreco())
console.log(carro.getPreco(100, '$')) //Uma chamada de funçao a partir de um objeto.
//Agora usando a funçao call & apply.
const notbook = {preco:3000, desc:0.15}
const moto = {preco: 5000, desc:0.1}
console.log(getPreco.call(notbook))
console.log(getPreco.call(moto, 100, '$'))
console.log(getPreco.apply(notbook))
console.log(getPreco.apply(moto, [100, '$']))
/*A chamada de funçao a partir de call deve conter primeiro o contexte depois os paramentros(contexto, paramentos),
ja em chamada a partir de apply os parametro ficam dentro de um array (contexto, [paramentros])*/