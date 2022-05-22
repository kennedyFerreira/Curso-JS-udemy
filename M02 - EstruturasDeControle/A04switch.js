const imprimirResultado = function (nota) {
 switch (nota) { /*Diferente do if que o valor passado e representado por true or false, no switch
o valor pode ser um Number, string entre outros*/
    case 10:
    case 9:
        console.log('quadro de honra')
        break //O break e usado para que se o resultado for encontrado nao executar as linhas abaixo
    case 8: case 7: /*O case pode estar tando em linha diferente como na msm linha, so sera alterado caso 
    queira quebrar a linha pra executar outros case.*/
        console.log('aprovado')
        break
    case 6: case 5: case 4:
        console.log('recuperaçao')
        break
    case 3: case 2: case 1: case 0:
        console.log('reprovado')
        break
    default: /*Se nao entrar em nenhum 'case' sera executado esta linha, pode ser colocado entre os case nao
    necessariamente no final do bloco*/
        console.log('nota invalida')    
 }
console.log('fim')
}
imprimirResultado(10)
imprimirResultado(8.6)
imprimirResultado(6.8)
imprimirResultado(3)
imprimirResultado(-1)