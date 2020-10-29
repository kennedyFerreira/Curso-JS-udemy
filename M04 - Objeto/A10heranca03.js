const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai) /* foi criado um objeto passando como prototipo o objeto dentro de () que neste
exemplo foi o objeto 'pai'*/
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
console.log(`${filha2.nome} te cor de cabelo ${filha2.corCabelo}`) /*mostra que o objeto 'filha2' tem relacao com
o objeto 'pai' onde o atributo corCabelo foi definido*/

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { //faz com que percorra todos os atributos ou chaves que pertence a um objeto incluindo sua heranca
    filha2.hasOwnProperty(key) ? // E uma forma de saber o atributo que pertence ao objeto e o que e recebido por herança
    console.log(`Pertence ao objeto: ${key}`) : console.log(`Por heranca: ${key}`)
}