function calculadora(op1, op2, operador){
    switch(operador){
        case '+':
            console.log(op1 + op2)
            break
        case '-':
            console.log(op1 - op2)
            break
        case '*':
            console.log(op1 * op2)
            break
        case '/':
            console.log(op1 / op2)
            break
        default:
            console.log('Operaçao invalida')
    }
}
calculadora(6, 3, '+')
calculadora(6, 3, '-')
calculadora(6, 3, '*')
calculadora(6, 3, '/')
calculadora(6, 3, '%')