function bhaskara(ax2, bx , c){
    resultado = []
    const delta = (bx**2) - (4 * ax2 * c)
    if(delta < 0){
        return 'Delta negativo'
    }else{
        const x1 = (-bx + Math.sqrt(delta))/(2 * ax2)
        const x2 = (-bx - Math.sqrt(delta))/(2 * ax2)
        resultado.push(Number(x1.toFixed(4)))
        resultado.push(Number(x2.toFixed(4)))
    }  
    console.log(delta)
    console.log(Math.sqrt(delta))
    return resultado
}
console.log(bhaskara(1, 2, -15))
console.log(bhaskara(3, 2, 1))
console.log(bhaskara(2, 4, 1))
console.log(bhaskara(4, 2, 8))

