function soma(){
    let soma = 0
    for (i in arguments) { //'arguments' e um array interno de uma funçao, que tem todos os argumentos que foram passados
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log('a', 'b', 'c') /*E uma forma de passar parametros variaveis, quantos parametros quiser 
mesmo que nao seja passado nenhum parametro quando a funcao foi criada.*/