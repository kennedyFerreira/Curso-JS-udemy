/*Closure é o escopo criado quando uma funçao e declarada, esse escopo permite a funçao acessar e manipular
variaveis externas à funçao.*/

//Contexto lexico em açao.

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){ //Ocontexto dessa funçao foi declarada dentro da funçao 'fora()'.
        return x
    }
    return dentro
}
const minhaFunçao = fora()
console.log(minhaFunçao()) /*Nesse caso vai acessar a variavel x = local devido ao escopo o qual a funçao foi 
declarada, esse escopo envolve a funçao bucando a variavel mais proxima do contexto lexico.*/