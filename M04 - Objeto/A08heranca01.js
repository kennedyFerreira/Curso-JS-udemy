const ferrari = {
    modelo: 'f40',
    velocidadeMaxima: 324
}

const volvo = {
    modelo: 'v40',
    velocidadeMaxima: 200
}

console.log(ferrari._proto_) /*Para acessar o atributo na cadeia de prototipo do objeto, 
e se nao encontrar retornara undefined*/
console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype)/*Por padrao sempre vai apontar para a funçao de prototype, 
mas isso nao acontece se o objeto for criado por uma funçao construtora*/
console.log(Object.prototype.__proto__) // o prototype nao tem um prototipo acima dele, entao vai apontar para null.

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
/* A herança e uma forma de ter reuso do codigo, onde vai procurar o atributo que foi designado 
por todos os 'pais'(prototipos) que aquele objeto foi criado, e para acessar o prototipo do objeto que foi 
criado é atraves de '__proto__*/