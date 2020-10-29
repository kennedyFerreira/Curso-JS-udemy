const imprimirResultado = function(nota) {
    if (nota => 7) {
        console.log('Aprovado')
    }else {
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa') /*Por ser uma string e o valor da condiçao de 'if' e 'else' ser valores Number,
sera considerado false e tera o resultado de 'else', tomar cuidado para que os dados seja sempre do mesmo
tipo para que nao tenha erros de logica.*/