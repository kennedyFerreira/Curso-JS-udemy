function media(vetor){
    let valorTotal = 0
    for(let i = 0; i < vetor.length; i++){
        valorTotal += vetor[i]
    }
    return console.log((valorTotal / vetor.length).toFixed(2))
}
media([1, 2, 3, 4, 5, 6, 7, 8])