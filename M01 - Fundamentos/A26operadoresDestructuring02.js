const [a] = [10]
console.log(a) 
const [n1, ,n3, n5, n6 = 0] = [10, 7, 9, 8] //Voce pode pular elementos na hora de desetruturar com ','.
console.log(n1, n3, n5, n6) /*Forma de desustrurar array, tirar da estrutura varias variaveis 
utilizando apenas uma atribuicao*/

const [, [,nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)//Forma de destruturar array aninhados (nao e muito utilizado pela dificil leitura)