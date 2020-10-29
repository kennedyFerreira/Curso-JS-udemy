//O contexto lexico e o contexto no qual as coisas foram declaradas dentro da linguagem.
const valor = 'global' 

function minhaFunçao() {/*A funçao foi declarada no contexto lexico do arquivo 'A16contextoLexico.js' que e 
um contexto globa*/
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFunçao()/*Mesmo passando a funçao para o contexto lexico de outra funçao, ela primeiro sera executatada
    no contexto global que foi primeiramente declarada*/
}
exec() 
