//Estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a = a || 1
    b = b || 2
    c = c || 3
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(2, 2, 3), soma1(0, 0, 0))/*Nesse caso nao tem como chamar valores numerico 
0 pois retornarao false e o valor padrao sera atribuido.*/

//Estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 2  /*Como argumentes e um array, o valor de 'b = 1' e devido a estar na segunda 
    posiçao dos parametro, se for com a seria 'a = 0', se for com c seria 'c = 2'*/
    c = isNaN(c) ? 3 : c //Esta e a mais segura neste caso pois ele retornara apenas valores numericos
    return a + b + c
}//Esses 3 exemplos sao formas de gerar um valor padrao para parametros em uma funcao.
console.log(soma2(), soma2(3), soma2(2, 2 ,3), soma2(0, 0, 0))

//Valor padrao do es2015
function soma3(a = 1, b = 2, c = 3){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(2, 2 ,3), soma3(0, 0, 0))/*Esta e a versao mais nova e melhor indicada para
gerar valores padroes em uma funcao.*/



