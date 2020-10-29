//o reduce transforma o array fazendo interaçoes entre os elementos.
const alunos = [
    {nome:'joao', nota: 7.3, bolsista: false},
    {nome:'maria', nota: 9.2, bolsista: true},
    {nome:'pedro', nota: 9.8, bolsista: false},
    {nome:'ana', nota: 8.7, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){/*percorreu o array para retirar apenas a nota e chamou o reduce 
para que a nota inicial seja somada com a proxima nota do array*/
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)// o acumulador inicial e passado no final da funcao reduce 
/*a funçao filter pode receber 4 parametros o valor de acumulador, o valor do elemento, pode receber
o indice e pode receber o array completo*/

console.log(resultado)