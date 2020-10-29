function valoresImpares(inicio = 0, fim = 100){
    let numerosImpares = []
    if(inicio < fim){
        for(inicio; inicio < fim; inicio++){
            if(inicio%2 == 1){
                numerosImpares.push(inicio)
            }
        }
    }else{
        for(fim; fim < inicio; fim++){
            if(fim%2 == 1){
                numerosImpares.push(fim)
            }
        }
    }
    return numerosImpares
}
console.log(valoresImpares())
console.log(valoresImpares(100, 0))