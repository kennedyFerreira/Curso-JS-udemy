//Par nome/valor em constextos diferentes.
const saudacao = 'opa' /*Contexto lexico 1(e o local onde sua variavel foi definida fisicamente dentro do 
codigo.) e nesse caso o constexto e dentro do aruqivo 'A22parNomexValor'.*/

function exec(){
    const saudacao = 'fala' //Contexto lexico. O cotexto esta dentro da funcao do arquivo 'A22parNomexValor'.
    return saudacao //O nome da variavel e igual mas nao gera erro pq estao em contexto diferentes.
}
console.log(saudacao)
console.log(exec())

//Objetos sao grupos aninhado de pares nome/valor.
const cliente = {
    nome: 'kennedy',
    idade: 25,
    peso: 70,
    endereço: {
        logradouro: 'rua jose carlos maya',
        numero: 144,
    }
}
console.log(cliente)
//Em objetos poder ter o mesmo nome e receber valores diferentes, caso os contextos sejam diferentes.
