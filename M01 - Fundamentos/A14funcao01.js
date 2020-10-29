//Funcao sem retorno.
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma('kennedy ', 'santos')
imprimirSoma(2, 3) /*Como a funçao nao retorna nada ela pode ser chamada com os valores que desejar 
para que tenha um resultado.*/
imprimirSoma(2) /*No caso ao lado foi dado valor ao 'a' e nada foi atribuido ao 'b' o que o torna um
valor undefined, imprimindo assim um not a number(NaN).*/

//Funcao com retono
function soma(a, b = 1){
    return a + b
}
console.log(soma(2,3)) //Como a funçao retorna um valor ela deve ser chamada dentro de um console.
console.log(soma(2)) /*Como o valor de 'b' ja foi predefinido, basta apenas da o valor de 'a' para
que tenha um resultado, mas o valor de b pode ser alterado caso queira que receba outro valor ao em vez 
do que foi pre definido.*/