const notas = [30, 38, 40, 78, 28, 80]

function atualizacaoDeNotas(){
    const notasAtualizadas = []
    for(let n in notas){
        if(notas[n] < 38) {
            notasAtualizadas.push(notas[n])
            console.log('reprovado')
        }else if (notas[n] % 5 > 2) {
            let nota = notas[n] + (5 - notas[n] % 5)
            notasAtualizadas.push(nota)
            console.log('Aprovado')
        }else {
            notasAtualizadas.push(notas[n])
            console.log('Aprovado')
        }
    }
    console.log(notasAtualizadas)
}
atualizacaoDeNotas()
    
