function cardapio(codigo, quantidade){
    switch(codigo){
        case 100: 
            console.log(`${quantidade} Cachorro quente R$${quantidade * 3.00}`)
            break
        case 200:
            console.log(`${quantidade} Hamburguer simples R$${quantidade * 4.00}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer R$${quantidade * 5.50}`)
            break
        case 400:
            console.log(`${quantidade} Bauru R$${quantidade * 7.50}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante R$${quantidade * 3.50}`)
            break
        case 600:
            console.log(`${quantidade} Suco R$${(quantidade * 2.80).toFixed(2)}`)
            break
        default:
            console.log('Produto nao existe')
    }
}
cardapio(100, 2)
cardapio(200, 3)
cardapio(300, 1)
cardapio(400, 2)
cardapio(500, 4)
cardapio(600, 3)
cardapio(1100, 2)