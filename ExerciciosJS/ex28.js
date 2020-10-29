function leitorDeParesEImpares(vetorNumerosInteiros){
    let numerosPares = []
    let numerosImpares = []
    for(let numeros of vetorNumerosInteiros){
        if (numeros%2 == 0){
            numerosPares.push(numeros)
        }else {
            numerosImpares.push(numeros)
        }
    }
    return console.log(`Existe no vetor ${numerosPares.length} numeros pares e ${numerosImpares.length} numeros impares.`)
}
leitorDeParesEImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 456, 799, 999])