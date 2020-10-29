//A classe e um forma de contruir funçao com OO(orientaçao objeto), que a partir de uma classe intaciar funçoes.
//Metodo classe e funçao construtora.
class pessoa{
    constructor(nome){//Uma funçao contrutora serve para intanciar a classe.
        this.nome = nome //A variavel passou a ser publica devido ao 'this'
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa('kennedy')
p1.falar()

//Metodo funçao factory.
const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('kennedy')
p2.falar()