function jurosSimples(capitalInicial = 500, txJuros = 0.1, tempoAplicaçao = 12){
    const capitalAcumulado = (capitalInicial * tempoAplicaçao) * txJuros
    let moeda = 'R$'
    console.log(`Em ${tempoAplicaçao} meses, com um investimento de ${moeda} ${capitalInicial}, esta com lucro de ${moeda} ${capitalAcumulado}.`)
}
function jurosCompostos(capitalInicial = 500, txJuros = 0.1, tempoAplicaçao = 12){
    const capitalAcumulado = capitalInicial * (1+txJuros)**tempoAplicaçao
    let moeda = 'R$'
    console.log(`Em ${tempoAplicaçao} meses, com um investimento de ${moeda} ${capitalInicial}, esta com lucro de ${moeda} ${capitalAcumulado.toFixed(2)}`)
}
jurosSimples()
jurosCompostos()