/*Operadorios ternarios sao operadores que recebem 3 operando, a sintase e 'condiçao ? expr1 : expr2'.
onde o primeiro operando e a condiçao, o segundo e a expr1 e a terceira e a expr2. Se condition é true, 
o operador retornará o valor de expr1; se não, ele retorna o valor de exp2.*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 

console.log(resultado(7.1))
console.log(resultado(6.7))
