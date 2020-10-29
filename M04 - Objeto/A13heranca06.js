function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new aula('bem vindo', 123)
const aula2 = new aula('ate breve', 456)
console.log(aula1, aula2)

//Simulando o new, mostra como é a forma explicita que o new instancia uma funçao.
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'bem vindo', 123)
const aula4 = novo(aula, 'ate breve', 456)
console.log(aula3, aula4)