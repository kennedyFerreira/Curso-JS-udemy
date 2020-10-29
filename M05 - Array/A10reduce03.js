//uma implementaçao para reduce, como a funcao dele funciona.
Array.prototype.reduce2 = function(callback, valoInicial){
    const indiceInicial = valoInicial ? 0 : 1
    let acumulador = valoInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2(soma, 15))