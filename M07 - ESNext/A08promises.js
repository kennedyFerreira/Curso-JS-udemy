function falarDepoisDe(segundo, frase) {
    return new Promise((resolve, reject) => { /*Promise é um objeto usado para processamento assíncrono. 
        Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.*/
        setTimeout(() => {
            resolve(frase)
        }, segundo * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))/*a funçao then pode ser chamado qunatas vezes quiser para gerar um 
    encadeamento de operacoes em cima do que foi recebido atraves do resolve*/