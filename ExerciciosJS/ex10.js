function resultado(num){
   return num % 3 == 0 ? true : false
}
console.log(resultado(8))
console.log(resultado(9))

const resultadoArrow = num => num % 3 == 0 ? true : false
console.log(resultadoArrow(9))
console.log(resultadoArrow(8))