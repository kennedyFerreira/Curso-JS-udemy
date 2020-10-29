 //Mostra que criou um objeto a partir de uma funcao.

console.log(typeof Object)
console.log(typeof new Object) 

const cliente = function(){}
    console.log(typeof cliente)
    console.log(typeof new cliente)

class produto{} //E um atalho de sintase para criar uma funcao.
console.log(typeof produto)
console.log(typeof new produto)

/*A forma de criar um objeto alem da forma literal e a partir de um funçao. A funcao pode ser instanciada 
quantas vezes necessarias com objetos.*/