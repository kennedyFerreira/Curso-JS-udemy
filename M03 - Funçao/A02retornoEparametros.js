//Em js uma funcao os parametros e retornos sao opcionais.

function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2`)
    }else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))//Como o segundo parametro nao foi passado ira retornar um NaN
console.log(area())//Caso nenum parametro dor passado retornara um NaN
console.log(area(2, 4, 6, 7))//Os parametros a mais que foram passados sera ignorado.
console.log(area(5, 5))