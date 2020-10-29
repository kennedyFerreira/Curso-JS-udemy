/*A funçao factory e uma funçao que retorna um objeto, tambem e um padrao valido uma funçao factory retornar 
um objeto com funçoes.*/

//Factory simples.
function criarPessoas(){
    return{
        nome: 'kennedy',
        sobrenome: 'Ferreira'
    }
}
console.log(criarPessoas())

