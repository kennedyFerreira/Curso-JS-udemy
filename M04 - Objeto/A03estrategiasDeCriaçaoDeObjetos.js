// Usando a notaçao literal.
const obj1 = {}
console.log(obj1)

//Object em JS, criado a partir de um funçao contrutora 'new'.
const obj2 = new Object
console.log(obj2)

//A partir de funçoes contrutoras criadas.
function produto(nome, preco, desc){
    this.nome = nome //O 'this' torna o 'nome' global, publico, sendo visivel fora da funça.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto('caneta', 5, 0.1)
const p2 = new produto('notbook', 1000, 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//A partir de funçao Factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalarios(){
            return ((salario/30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario('kennedy', 1000, 4)
const f2 = criarFuncionario('ariane', 5000, 2)

console.log(f1.getSalarios(), f2.getSalarios())

//A partir de Object.create
const filho = Object.create(null)
filho.nome = 'Pedro'
console.log(filho)



