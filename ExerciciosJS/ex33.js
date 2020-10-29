//Maneira 1
function unindoVetores(vetorInteiro, vetorString, vetorDouble){
    let vetoresUnidos = vetorInteiro.concat(vetorString, vetorDouble)
    return vetoresUnidos
}
console.log(unindoVetores([1, 2, 3, 4], ['um', 'dois', 'tres', 'quatro'], [1.1, 1.2, 1.3, 1.4]))

//Maneira 2
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['um', 'dois', 'tres', 'quatro']
let vetorDouble = [1.1, 1.2, 1.3, 1.4]
function concatenar(...args){
    let resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}
console.log(concatenar(vetorInteiro, vetorString, vetorDouble))