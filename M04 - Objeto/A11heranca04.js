function meuObjeto(){}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto // cria um objeto com referencia a funçao ja definida.
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) /* isso mostra que todos objetos diferentes criados a partir de uma mesma funcao construtora
apontam para o mesmo prototype.*/
console.log(meuObjeto.prototype === obj1.__proto__) /*mostra que  a funçao e os objetos criados a partir dessa funçao construtora apontam
para o mesmo prototype.*/

meuObjeto.prototype.nome = 'Anonimo' /*Qualquer objeto criado a partir dessa funçao tera como herança o nome (ou atrbutos) que foram dados 
a essa funcao*/
meuObjeto.prototype.falar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
obj1.falar()

obj2.nome = 'Rafael' // em objeto foi sobrescrito o atributo de nome.
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype /* muda a referencia do objeto de 'Objeto.prototype' (que e o padrao quando um objeto e criado) para
a funcao 'meuObjeto'*/
obj3.nome = 'obj3'
obj3.falar()

//Resumindo a farofa...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)