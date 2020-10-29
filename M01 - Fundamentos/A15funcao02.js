//Armazenando uma funcao em uma variavel ou constante
const imprimirSoma = function (a, b) { //Esse e uma exemplo de funcao anonima, que usa o codigo function sem um nome.
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenamento em uma funcao arrow em uma variavel
const soma = (a, b) => { //Os simbolos => substitui a palavra function, esse e o chamado funcao arrow.
    return a + b
}
console.log(soma(2, 3))

//Retorno implicito
const subtracao = (a, b) => a - b /*O codigo sem a chave quer dizer que vai executar apenas uma unica 
linha (uma unica setença de codigo), fazendo assim que o retorno dessa senteça de codigo seja implicito*/
console.log(subtracao(5, 3))
