function intervalorVetor(vetor){
    let intervaloEntre10e20 = 0
    let foraDoIntervalor = 0
    for(let num of vetor){
        if(num > 10 && num < 20){
            intervaloEntre10e20++
        }else {
            foraDoIntervalor++
        }
    }
    return console.log(`Exite ${intervaloEntre10e20} numeros entre o intervalo de 10 e 20; e ${foraDoIntervalor} numeros fora desse intervalo.`)
}
intervalorVetor([1, 4, 5, 6, 14, 17, 30, 12, 21])