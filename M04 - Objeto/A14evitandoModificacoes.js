/* Object.preventExtensios, faz com que o objeto nao possa receber uma extensao, nao podendo adicionar novos
objetos, mas permite que os atributos ja definidos passam ser alterados.*/

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))//mostra se o objeto e ou nao extensivel.

produto.nome = 'borracha' // pode ser alterado.
produto.descricao = 'borracha escolar' // nao pode ser adicionado
delete produto.tag // mas pode excluir os atributos
console.log(produto)

/* Object.seal, permite selar o objeto, faz com que nao seja permitido nem adicionar e nem excluir atributos,
mas permite modificar os atributos.*/

const pessoa = Object.seal({nome: 'kennedy', idade: 25})
console.log('Selado:', Object.isSealed(pessoa))//mostra se o objeto esta selado

pessoa.sobrenome = 'ferreira' //nao pode ser adicionado
delete pessoa.nome //nao pode ser deletado
pessoa.idade = 24 //pode ser alterado
console.log(pessoa)

// Object.freeze, o objeto fica com selado e com os valores constantes, nada pode ser alterado

const carro = Object.freeze({modelo: 'a4', ano: 1994})
console.log('Congelado:', Object.isFrozen(carro))

carro.modelo = 'a3'
carro.dono = 'kennedy'
delete carro.ano
console.log(carro)