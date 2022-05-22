//Operador de desestruturaçao, extraindo da estrutura algum valor ou atribututo

const pessoa = {
    nome: 'kennedy',
    sobrenome: 'ferreira',
    idade: 25,
    endereco: {
        logradouro: 'rua jose carlos',
        numero: 144
    }
}
const {nome, idade} = pessoa 
console.log(nome, idade)
const {nome: n, idade: i} = pessoa
console.log(n, i)/*Para tirar de uma estrutura objeto usa '{}', dentro das chaves coloque o valor
que quer extrair do objeto. Sao exemplos de extrair valores de um objeto, sedo a terceira linha uma
forma de criar um atributo menor para ser impreso.*/

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado) /*Nesse caso os atributos nao existem mas podem ser atribuidos como no 
caso de 'bemHumorado', se nada for atribuido sera impreso undefined.*/

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) //Forma de extrair atributos aninhados ao objeto.


