function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1) { /*A estrutura 'while' e uma estrutura de repetiçao baseada em uma expresao true ou false,
enquanto for true continua e se for false ela sai do laço, e ela e propria para executar laços que tem uma 
quantidade indeterminada de repetiçao.*/ 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao escolhida foi ${opcao}`)
}
console.log('fim')