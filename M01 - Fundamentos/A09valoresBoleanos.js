let isAtivo = false
console.log(isAtivo) //Em js existe o literal de false

isAtivo = true
console.log(isAtivo) //E o literal de true

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo) //Converter um numero em valor boleano

console.log('os verdadiros...') //Exemplo de valores verdadeiros
console.log(!!3)
console.log(!!4)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //Se o valor da atribuiçao for um valor verdadeiro retornara verdadeiro

console.log('os falsos...') //Exemplo de valores falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //Se o valor da atribuiçao for um valor falso retornara falso

console.log('pra finalizar...')
console.log(!!('' || null || ' ')) //Vai resolver os valores e retornar o primeiro verdadeiro.
//Ex:
let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Kennedy'
console.log(nome || 'Desconhecido')