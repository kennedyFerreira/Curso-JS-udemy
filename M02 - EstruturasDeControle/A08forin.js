const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i in notas){
    console.log(i, notas[i])
}//Uma forma de mostrar os atributos de cada indice do array, nao e a melhor forma.

const pessoa = {
    nome: 'kennedy',
    sobrenome: 'ferreira',
    idade: 25,
    peso: 70
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}//Uma forma de percorrer um objeto, e uma forma mais interessante de usar ' for in' em objetos do que em array.
