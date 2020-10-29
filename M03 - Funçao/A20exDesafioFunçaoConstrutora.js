//Exercicio para converter uma funçao contrutora para uma funçao factory.
//Funçao construtora que pode ser instanciada por objetos.
class pessoa{
    constructor(nome){
        this.nome = nome 
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('kennedy')
p1.falar()

//Funçao factory que pode ser instanciada por objetos.
function Pessoa(nome){
    this.nome
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}
const p2 = new Pessoa('Ariane')
p2.falar()