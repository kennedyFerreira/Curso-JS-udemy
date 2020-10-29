function preco(valor, moeda){
    console.log(`${moeda} ${valor.toFixed(2).replace('.',',')}`)
}
preco(0.1 + 0.2, 'R$')