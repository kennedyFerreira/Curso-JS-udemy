
function retirada(valor) {
    const notasDisponiveis = [100, 50, 10, 5, 1]
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    for (let nota of notasDisponiveis) {
        while(valor >= nota) {           
            if(valor >= 100){
                contador100++
                valor -= 100
            }else if(valor >= 50){
                contador50++
                valor -= 50
            }else if(valor >= 10){
                contador10++
                valor -= 10
            }else if(valor >= 5){
                contador5++
                valor -= 5
            }else{
                contador1++
                valor -= 1
            }
        }
    }
    return contagemDeNotas(contador1, contador5, contador10, contador50, contador100)
}
function contagemDeNotas(contador1, contador5, contador10, contador50, contador100){
    let resultado = ''
    if (contador1 > 0){
        resultado += `${contador1} nota(s) de R$1. `
    }
    if (contador5 > 0){
        resultado += `${contador5} nota(s) de R$5. `
    }
    if (contador10 > 0){
        resultado += `${contador10} nota(s) de R$10. `
    }
    if (contador50 > 0){
        resultado += `${contador50} nota(s) de R$50. `
    }
    if (contador100 > 0){
        resultado += `${contador100} nota(s) de R$100. `
    }
    return resultado
}

console.log(retirada(1397))
