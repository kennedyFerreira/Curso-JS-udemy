const soma = function(x, y) { //Uma funçao anomima e uma funçao que nao recebe nome antes dos parametros.
    return x + y
}
const imprimirResultado = function(a, b, operaçao = soma){ //Pode ser passado para uma variavel ou constante.
    console.log(operaçao(a, b)) 
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){//Pode passar uma funçao anonima para outra funçao.
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)/*Pode ser uma funçao arrow passada para uma funçao. As funçoes arrow
sempre serao funçoes anonimas*/

const pessoa = {
    falar: function() { //Uma funçao anonima dentro de um contexto de objeto. Pode ser alterado para apenas falar()
        console.log('Ola')
    }
}
pessoa.falar() 
