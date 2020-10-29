function trocaElementosVetor(vetor1, vetor2){
    for(let i = 0; i < vetor1.length; i++){
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }
    console.log(`Novo vetor1: ${vetor1}`)
    console.log(`Novo vetor2: ${vetor2}`)
}
trocaElementosVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])