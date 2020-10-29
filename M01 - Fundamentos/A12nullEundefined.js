//Conceito de referencia.
const a = {name: 'teste'}
console.log(a)
const b = a
console.log(b)
b.name = 'opa'
console.log(b)
console.log(a) /* A constante 'a' mostra apenas o endereço dos dados, logo quando a constante 'b' 
recebe 'a' ela vai receber o msm endereço, podendo assim alterar os dados da contante 'a' a partir
da constante 'b', chama-se atribuiçao por referencia. */

let c = 3
let d = c
d++
console.log(d)
console.log(c) /* Quando se trabalha com valores primitivos no caso da variavel 'c' os valores tornam-se
idependentes, nao dando para atribuir valores por referencia como no primeiro exemplo.*/

//Conceito de undefined
let valor //Nao foi atribuido valores, inicializado.
console.log(valor) //Logo o valor e undefined

valor = 2
console.log(valor)
valor = 3
valor = null //Ausencia de valor
console.log(valor) /*A logica do null serve para quando uma variavel aponta para algum objeto ou valor, e quer 
zerar essa variavel, basta fazer com que essa variavel receba null. */
//Ex:console.log(valor.toString())//Nao pode ser acessado nenhum membro, grupo ou funcao de variveis que estao null ou undefined.



