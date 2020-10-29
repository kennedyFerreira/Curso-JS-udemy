function compraCarro(modelo){
    switch(modelo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
            console.log('Tem certeza que nao prefere este modelo?')
            break
        case 'moto':
            console.log('Tem certeza que nao prefere este modelo?')
            break
        case 'caminhonete':
            console.log('Tem certeza que nao prefere este modelo?')
            break
        default:
            console.log('Nao trabalhamos com este tipo de automovel')
    }
}
compraCarro('hatch')
compraCarro('sedan')
compraCarro('moto')
compraCarro('caminhonete')
compraCarro('onibus')