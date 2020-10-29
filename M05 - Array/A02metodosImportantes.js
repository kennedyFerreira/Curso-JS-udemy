const pilotos = ['vetel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen') // Adiciona no ultimo elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('hamilton') // adiciona no primeiro elemento
console.log(pilotos)

//splice pode adicionar e remover elementos
//adicionar 
pilotos.splice(2, 0, 'bottas', 'massa') // a partir do elemento 2 sera adicionado dois novos elementos.
console.log(pilotos)
// remover
pilotos.splice(3, 1) // a partir do elemento 3 sera excluido 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1, 4) /* esse metodo retorna um novo array a partir do indice passado dentro de () 
nesse caso a partir do indice 2*/
console.log(algunsPilotos1)