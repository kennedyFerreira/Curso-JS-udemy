const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//Sem o uso de funçao callback
const notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7)
    notasBaixas.push(notas[i])
}
console.log(notasBaixas)

//Usando uma funçao callback
const notasBaixasCallback = notas.filter(function(nota){
    return nota < 7
}) /*'filter' e uma funçao que vai filtrar os elementos de um array em cima de um determinado criterio, 
vai retornar true ou false, essa funçao vai ser chamada para cada elemento do array, se caso der true o 
elemento sera adicionado se der false nao sera adicionado*/
console.log(notasBaixasCallback)

const notasBaixasCallback2 = notas.filter(nota => nota < 7) //Simplificando usando arrow function.
console.log(notasBaixasCallback2)