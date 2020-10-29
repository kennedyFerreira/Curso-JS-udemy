function alturaCriancas(altura1, altura2, tx1Anual, tx2Anual){
    let taxaDeCrescimento1 = altura1 * tx1Anual
    let taxaDeCrescimento2 = altura2 * tx2Anual
    let tempo = 0 
    if (altura1 > altura2 && tx1Anual < tx2Anual){
        while(altura2 < altura1){
            altura1 += taxaDeCrescimento1
            altura2 += taxaDeCrescimento2
            tempo++
        }
    }else if(altura2 > altura1 && tx2Anual < tx1Anual){
        while(altura1 < altura2){
            altura1 += taxaDeCrescimento1
            altura2 += taxaDeCrescimento2
            tempo++
        }
    }else if(altura1 > altura2 && tx1Anual >= tx2Anual){
        return console.log('A criança menor nunca ira ultrapassar a maior')
    }else if(altura2 > altura1 && tx2Anual >= tx1Anual){
        return console.log('A criança menor nunca ira ultrapassar a maior')
    }
    else {
        return console.log('Elas tem a mesma altura')
    }
    return console.log(`A criança menor ira ultrapassar a menor em ${tempo} anos. `)
}
alturaCriancas(150, 140, 0.01, 0.06)
alturaCriancas(140, 150, 0.03, 0.02)
alturaCriancas(150, 140, 0.06, 0.01)
alturaCriancas(140, 150, 0.01, 0.06)
alturaCriancas(150, 150, 0.01, 0.1)