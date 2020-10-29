//Operador destructuring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 4]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

/*Arrow function (this), mesmo forçando na segunda constate para que o this aponte para um objeto vazio isso nao 
ira acontecer pois nao ira variar em um contexto de arrow function.*/
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametro default
function parametroDefault(texto = 'Node'){
    console.log(texto)
}
parametroDefault()
parametroDefault('O parametro passado sera atribuido')

//Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(10, 12, 15, 20))

//ES8: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))// retorna uma matriz com as chave/valores do objeto

//Melhorias na notaçao literal
const primeiroNome = 'Carla'
const pessoa = {
    primeiroNome, 
    ola() {
        return 'Oi'
    }
}
console.log(pessoa.primeiroNome, pessoa.ola())

//classe
class Animal{}
class cachorro extends Animal { //sintaxe de herança e classe
    falar(){
        return 'Latido'
    }
}
console.log(new cachorro().falar())
