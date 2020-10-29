function anuidade(valorAnuidade, mes = 1 ){
    const txJuros = 0.05
    if (mes > 1){
        return `O valor a ser pago e de R$${(valorAnuidade * (1 + txJuros)**(mes - 1)).toFixed(2)}`
    }else {
        return `O valor a ser pago e de R$${valorAnuidade}`
    }
}
console.log(anuidade(100, 12))