let contador = 1 
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
//A mesma estrutura pode ser feita em 'for' de forma mais organizada.

for(let i = 1; i <= 10; i++){ //E dividido por uma variavel, experessao e o incremento.
    console.log(`i = ${i}`)
} //'for' e melhor para repeticoes onde voce saiba o limite de repetiçoes que quer.

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
let somaNotas = 0
for(let n = 0; n < notas.length; n++){
    
    somaNotas += notas[n]
    console.log(`notas = ${notas[n]} , ${somaNotas}`)
}//Uma forma de navegar pelo array com 'for' para mostrar todos os elementos que tem dentro do array.