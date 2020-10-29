//Relacao de heranca em classe.
class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class pai extends avo{ /*'extends' e a forma no ambito de sintase de class de definar que uma classe ou 
funcao tem outra class ou funcap como prototipo*/
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome) /* chamar a funcao construtora da super classe que nesse caso e de 'avo', ou seja chama 
        a funcao de quem a class tem como prototipo */
        this.profissao = profissao
    }
}
class filho extends pai {
    constructor(){
        super('ferreira')
    }
}
const Filho = new filho
console.log(Filho)