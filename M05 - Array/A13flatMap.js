const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome:'gustavo',
        nota: 8.1
    },{
        nome: 'ana',
        nota: 9.3
    }]
},{
    nome: 'turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    },{
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) /*A forma de usar um map para retirar valores de um array que contenha subarrays, retornou
dois subarrays, e para unilos em apenas em um array usa-se o flatmap.*/

//O flatMap nao existe o metodo na api padrao, ele e criado a partir dessa funçao
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
} 
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

