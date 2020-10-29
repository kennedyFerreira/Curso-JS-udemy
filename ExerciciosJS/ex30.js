function maiorMenor1(vetor){
    let maiorValor = vetor[0]
    let menorValor = vetor[0]
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] > maiorValor){
            maiorValor = vetor[i]
        }
        if (vetor[i] < menorValor){
            menorValor = vetor[i]
        }
    }
    return [maiorValor, menorValor]
}


function maiorMenor2(vetor){
    let maiorValor = Math.max(...vetor)//Usando spread (...)
    let menorValor = Math.min(...vetor)
   
    return [maiorValor, menorValor]
}
console.log(maiorMenor1([10, 2, 3, 4, 6, 90, 400, 20, 30, 40, 50, 10, 2, 34, 56, 93, 230, 123, 232, 532]))
console.log(maiorMenor2([10, 2, 3, 4, 6, 90, 400, 20, 30, 40, 50, 10, 2, 34, 56, 93, 230, 123, 232, 532]))