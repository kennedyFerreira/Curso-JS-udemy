const nome = 'kennedy'
const concatenaçao = 'ola ' + nome + '!' //Uma forma de concatenar string a uma variavel a uma constante

const template = `Ola ${nome}!` //Forma mais organizada de ligar uma string a uma variavel ou constante.

console.log(concatenaçao)
console.log(template)

const up = texto => texto.toUpperCase() //Dentro de uma string posso chamar uma funçao, no caso e um exemplode uma funcao chamada para colocar a string em maiusculo.
console.log(`Ei... ${up('cuidado')}!`)