function carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 //Atributo privado pertence apenas ao escopo da funçao.
    this.acelerar = function() { /*Metodo publico, vai ser responsavel por acrescentar a velocidade atual que esta
        visivel apenas a funçao, o 'this' faz com que torne algo visivel para fora do escopo atual.*/
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getvelocidadeAtual = function(){ //Novamente um metodo publico para ter acesso ao escopo de outra funçao
        return velocidadeAtual
    }
}
const uno = new carro()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
/*Tem duas instancias diferentes de uma mesma funçao construtora, a funçao construtora tem relaçao com o 
paradigma OO, pode criar quantas funçoes quiser dentro de uma funçao maior, podendo tornar uma funçao uma
funçao publica a partir do 'this', e instanciar essa funçao a partir do operador 'new', basicamente a funçao
construtora e um molde e a partir dele pode ser criado quantos objetos quiser, o dado interno da funçao pertence
a cada objeto instanciado a funçao.*/