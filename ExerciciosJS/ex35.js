//Usando spread
let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(){
    vetorPilha.push(...vetorAdiciona)
    console.log(`Vetor adicionado: ${vetorAdiciona}`)
    console.log(`Vetor resultado: ${vetorPilha}`)
}
adicionarVetor()

//Usando for.
function adicionaVetor(vetorInicial, vetorAdicionar){
    for(let i = 0; i < vetorAdicionar.length; i++){
        
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('vetor adicionado: ' + vetorAdicionar)
    console.log('vetor resultado: ' + vetorInicial)
}
adicionaVetor(vetorPilha, vetorAdiciona)