console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// toda funcao tem atributo '.prototype', ou seja todos acima tem esse atributo.

String.prototype.reverse = function() { /*e um conceito de adicionar novas funçoes ou atributos dentro de um
    determinado prototipo como nesse exemplo que e uma 'String'*/
    return this.split('').reverse().join('') /*'split' que pertencea string, quebra toda a string em um array separando os caracteres,
    enquanto 'reverse' e uma funçao de array que vai reverter a ordem do array, e 'join' junta eles novamente.*/
}
console.log('escola cod3r'.reverse())

Array.prototype.first = function(){/*e um conceito de adicionar novas funçoes ou atributos dentro de um
    determinado prototipo como nesse exemplo que e uma 'Array'*/
    return this[0] // dentro de um metodo prototipo e acessado atraves do 'this'
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

//E importante nao subustuir comportamentos padroes dentro da linguagem.