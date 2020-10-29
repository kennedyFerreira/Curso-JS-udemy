console.log('a=', a) /*Neste caso ocorre o içamento da variavel quando declarada pelo'var', mostra que o valor
de 'a' existe porem ainda esta undefined, em outras linguagens aconteceria apenas um erro.*/
var a = 2 //Exemplo de erro apenas colocar essa variavel em comentario. E isso ocorre apenas com o 'var'.
console.log('a=', a) 
//Nao tem um motivo para usso de hoisting, entao sempre colocar as variaveis antes do codigo.
//Hoisting tem a funcao de levar a variavel para o topo do codigo apesar do valor ser undefined.