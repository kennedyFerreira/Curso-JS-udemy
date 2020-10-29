function rand([min = 0, max = 1000]) { //Funcao com chamada padrao do mim = 0 e max = 1000
    if (min > max){
        [min, max] = [max, min] //Aqui foi criado um array a partir de um destruturaçao para inverter caso a condiçao aconteça
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Arredondar para baixo, para arredondar para cima substitui 'floor' por 'ceil'.
}
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))//Alternativas com destructuring para chamada de funçoes, utilizando chamada padroes em array.
