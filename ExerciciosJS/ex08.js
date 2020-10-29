const pontuacoes = [8, 10, 15, 20, 18, 3, 30, 40, 2]

function resultados(){
    let recordes = 0
    let piorJogo = 0
    let melhorPontuacao = pontuacoes[0]
    let piorPontuacao = pontuacoes[0]
    for(let p = 1; p < pontuacoes.length ; p++){
        if(pontuacoes[p] > melhorPontuacao){
            melhorPontuacao = pontuacoes[p]
            recordes++
        }else if(pontuacoes[p] < piorPontuacao){
            piorPontuacao = pontuacoes[p]
            piorJogo = p + 1
        }
    }
    return [recordes, piorJogo]
}
console.log(resultados())