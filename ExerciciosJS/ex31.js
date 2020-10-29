function valoresNegativos(vetor){
    let qntNegativos = 0
    for(let num of vetor){
        if(num < 0){
            qntNegativos++
        }
    }
    console.log(`Existem ${qntNegativos} de numeros negativos.`)
}
valoresNegativos([1, 2, 5, -23, 12, -12, 2, -2])