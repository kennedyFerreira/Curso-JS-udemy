const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro' /*A constante nao esta sendo alterada pois a const pessoa esta apontando para um objeto,
e o que esta sendo alterado e o nome que esta dentro de objeto.
console.log(pessoa)*/

//Neste caso o que esta sendo alterado e a const pessoa que esta recebendo um novo objeto, o que vai gerar um erro.
/*pessoa = {nome: 'Ana'}
console.log(pessoa)*/

/*Para fazer com que um objeto nao possa ser alterado os dados usa-se a funçao 'freeze', tornando o objeto uma
constante*/

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa) // Nao foi alterado depois que a funçao 'freeze' foi usado.

const pessoaConstante = Object.freeze({
    nome: 'kennedy'
}) //Criando um objeto constante.
console.log(pessoaConstante)
