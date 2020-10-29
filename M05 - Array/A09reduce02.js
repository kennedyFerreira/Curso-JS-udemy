const alunos = [
    {nome:'joao', nota: 7.3, bolsista: true},
    {nome:'maria', nota: 9.2, bolsista: true},
    {nome:'pedro', nota: 9.8, bolsista: true},
    {nome:'ana', nota: 8.7, bolsista: false}
]

// Desafio 1: todos os alunos sao bolsistas?
let resultado = alunos.map(b => b.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual ? true : false
})

console.log(resultado)

// Desafio 2: Algum aluno e bolsista?
let resultado2 = alunos.map(b => b.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual ? true : false
})
console.log(resultado2)