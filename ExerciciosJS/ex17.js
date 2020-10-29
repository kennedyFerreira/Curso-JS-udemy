function aumento(plano, salario){
    switch(plano){
        case 'A':
            console.log(`Seu novo salario é ${salario * 1.1}`)
            break
        case 'B':
            console.log(`Seu novo salario é ${salario * 1.15}`)
            break
        case 'C':
            console.log(`Seu novo salario é ${salario * 1.2}`)
            break
        default:
            console.log('Plano invalido')
    }
}
aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)