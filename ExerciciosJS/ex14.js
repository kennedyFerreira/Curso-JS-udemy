function venderFrutas(fruta){
    switch(fruta){
        case 'maça':
            console.log('Nao vendenmos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos ocm escassez de kiwi')
            break
        case 'melancia':
            console.log('Aqui esta, sao R$3,00 reais o kg')
            break
        default:
            console.log('Erro!')
            break
    }
}
venderFrutas('maça')
venderFrutas('kiwi')
venderFrutas('melancia')
venderFrutas('carne')