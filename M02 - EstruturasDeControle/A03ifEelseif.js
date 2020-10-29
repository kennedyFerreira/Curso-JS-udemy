//ElseIf e usado para encadear varias condiçoes, so sera impreso um resultado.
Number.prototype.entre = function (inicio,fim) {
    return this>= inicio && this <= fim
}
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('quadro de honra')
    }else if (nota.entre(7, 8.99)) { 
        console.log('aprovado')
    }else if (nota.entre(4, 6.99)) {
        console.log('recuperaçao')
    }else if (nota.entre(0, 3.99)) {
        console.log('reprovado')
    }else {
        console.log('Valor invalido')
    }
console.log('fim')
} 
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
//imprimirResultado('8') 