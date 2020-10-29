/* map percorre cada um dos elementos de um array e cria outro array com os elementos modificados, a regra e que
sempre o array modificado e do mesmo tamanho do array original*/

const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function(elemento){ // recebe uma funçao callback com os parametros desejados
    return elemento * 10
}) /*a funçao map pode receber 3 parametros o primeiro e o valor do elemento, pode receber
o indice e pode receber o array completo*/
console.log(nums, resultado) // o map cria um novo array modificado, e nao modifica o array original 

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) /* pode criar uma cadeia de map fazendo com que sempre
que um novo array for gerado tenha outra modificaçao*/
console.log(resultado)
