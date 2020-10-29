//Cadeia de prototipo (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}/* o '__proto__' define o atributo como referencia no objeto que foi 
definido anteriormente, fazendo como que seja pesquisado em todos os objetos relacionados.*/
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) /* isso mostra que o objeto filho recebeu como 
herança os atributos dos objetos anteriores que foram definidos com '__proto__'*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing, sombreamento (onde uma variavel de um escopo tem o msm nome da variavel de outro escopo)
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}` //o 'super' referencia o prototipo do objeto.
    }
}
Object.setPrototypeOf(ferrari, carro) /*neste momento foi estabelicido uma relacao entre carro e ferrari onde
o objeto de 'ferrari' tem como prototipo o objeto 'carro'. Isso acontece devido a funçao 'setPrototypeOF'.*/
Object.setPrototypeOf(volvo, carro) //neste caso o objeto 'volvo' recebeu 'carro' como seu prototipo.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)// como ouve um shadowing a velMax sera referenciada a 'ferrari' e nao ao objeto 'carro'
console.log(ferrari.status())


