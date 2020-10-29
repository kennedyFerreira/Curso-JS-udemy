//Objeto e um coleçao dinamica de pares chave/valore.
const produto = new Object //Uma forma de criar um novo objeto com o operador new(funçao construtora).
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica' /*Foge um pouco do padrao, colocando identificadores como espaços,
numeros e etc... Mas nao tem como chamar com a notaçao ponto, somente em forma de string assim como foi criado.*/
produto.preco = 220

console.log(produto)
delete produto.preco //Forma de deletar o que foi adicionado ao objeto com notaçao ponto
delete produto['marca do produto'] //Neste caso deve ser usado a forma como foi invocado ['string']
console.log(produto)

//Criaçao literal.
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'kennedy',
        idade: '25',
        endereço: {  // Pode criar uma cadeia de objetos dentro de um objeto.
            rua: 'Abc',
            numero: 02
        }
    },
    condutores: [{  // Pode ser criado um outro objeto em forma de array dentro de um objeto.
        nome: 'ariane',
        idade: 27
    },{ //A forma de criar mais de um objeto dentro do array
        nome: 'mara',
        idade: 48
    }],
    cacularValorSeguro: function(){
        //O objeto pode receber funçoes.
    }


}

carro.proprietario.endereço.numero = 1000 /*Aterando um valor precisa que a notaçao desde o inicio do objeto ate
o objeto que quer alterar, nesse caso para alterar o numero.*/
carro['proprietario']['endereço']['rua'] = 'Av Bca' /*Uma forma de acessar os dados sem ser com notaçao ponto, 
acessando atraves do algoritimo atribuido.*/

console.log(carro)
