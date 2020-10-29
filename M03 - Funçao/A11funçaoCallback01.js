const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) /*O 'forEach' e uma funçao que existe dentro do array, a ideia do callback e de 
passar uma funçao para outra funçao e quando determinado evento acontecer essa funçao que foi passada
 ela vai ser chamada de volta, nesse exemplo a funçao percorre por cada elemento do array.*/
fabricantes.forEach(fabricante => {
    console.log(fabricante)
})/*O evento que ocorre e cada um dos elementos que existe no array, cada vez que um novo elemento e encontrado no
array a funçao e chamada novamente*/
