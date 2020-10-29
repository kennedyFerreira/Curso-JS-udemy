//Estrutura de conjunto, nao indexada e nao aceita repetiçao
const time = new Set()
time.add('vasco')//pode ser adicionado invidualmente
time.add('sao paulo').add('palmeiras').add('corinthians')// e pode adicionar de forma encadeada
time.add('vasco')

console.log(time)
console.log(time.size)//quantos elementos estao presentes em Set
console.log(time.has('Vasco'))//deve ser escrito de forma identica para saber se esta presente
console.log(time.has('vasco'))
time.delete('corinthians')
console.log(time.has('corinthians'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)// neste caso o 'Lucas' no indice 3 de 'nomes' nao foi adiciona pois 'Set' nao aceita repeticoes
