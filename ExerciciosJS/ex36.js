//Usando for of.
function multiplicandoVetor(vetor, multiplicador){
    let resultado = []
    for(let num of vetor){
        resultado.push(num * multiplicador)
    }
    return resultado
}
console.log(multiplicandoVetor([1, 2, 3, 4, 5], 2))

function multiplicandoVetor2(vetor, multiplicador){
    let resultado = []
    for(let num of vetor){
        if (num > 5){
            resultado.push(num * multiplicador)
        }
    }
    return resultado
}
console.log(multiplicandoVetor2([4, 5, 6, 7, 8], 2))

//Usando funçao callback.
function multiplicandoVetor3(vetor, multiplicador){
    let resultado = []
    vetor.forEach(element => {
        resultado.push(element * multiplicador)
    })
    return resultado
}
console.log(multiplicandoVetor3([1, 2, 3, 4, 5], 2))

function multiplicandoVetor4(vetor, multiplicador){
    let resultado = []
    vetor.forEach(element => {
        if(element > 5){
        resultado.push(element * multiplicador)
        }
    })
    return resultado
}
console.log(multiplicandoVetor4([4, 5, 6, 7, 8], 2))
