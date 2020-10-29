/*Funcao em JS é First-Class Object (Citizems) ou Higher-Order function, a funcao e tratada como um 
dado o que abre um leque de possibilidades na promaçao.*/

//Criar de forma literal.
function fun1() { } //Toda funçao se nao tiver nenhum parametro vai retornar undefined.

//Armazenamento em uma variavel.
const fun2 = function() { }

//Armazenar em um array.
const array = [function(a,b) { return a + b }, fun1, fun2] /*Em um array pode tanto declarar uma funcao com 
atributos, como colocar uma variavel que recebeu uma funçao.*/
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto.
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar uma funçao como parametro para outra funçao.
function run (fun) {
    fun()/*Aqui e onde esta executando a funcao dentro de run, se tirar os '()' vera que nao sera passado 
    como parametro.*/
}
run(function(){ console.log('Executando...')})

//Uma funçao pode retornar/conter uma funçao.
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) //A forma para a chamada de quando uma funçao retorna uma funçao
const res = soma(2, 3)
res(4) /*A funçao pode ser armazenada em uma variavel, e a funcao que e retornada pode ser chamada atraves 
da variavel.*/
