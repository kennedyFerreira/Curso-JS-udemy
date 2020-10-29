/*A diferenca de imperativo e declarativo, em imperativo mostra o passo a passo sendo mais importante 
como tem que ser feito, ja na abordagem declarativa o mais importante e o que tem que ser feito.*/
const alunos = [
    {nome:'joao', nota: 7.9},
    {nome:'maria', nota: 9.2}
]

//Imperativo, mostra claramente o passo a passo de como faz a media de notas.
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

/*Declarativo, neste caso tem um melhor aproveito das funçoes criadas para uso no decorrer do codigo e nao 
tendo muita importancia no passo a passo e sim o que tem que ser feito. E uma forma mais inteligente e mais 
claro de criar um codigo.*/
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

