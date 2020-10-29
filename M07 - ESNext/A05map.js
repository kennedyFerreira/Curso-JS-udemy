//Uma estrutura alem de objecto que e formado por chaves/valores
const tecnologias = new Map()
tecnologias.set('react', { framework: false })//maneira de instaciar um 'Map'
tecnologias.set('angular', { framework: true})
console.log(tecnologias.react)// esta forma nao é a correta para invocar o 'Map'
console.log(tecnologias.get('react').framework)//sintaxe para invocar o 'Map'

const chavesVariadas = new Map([ //Em objeto nao pode receber chaves variadas com a funçao ou objetos
    [function(){ }, 'Funçao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))//verifica se '123' esta presente dentro do Map
chavesVariadas.delete(123)//excluir um elemento do Map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//verifica quantos elemntos que estao presente no Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//mostra que o Map nao aceita repeticoes em chaves 
console.log(chavesVariadas)
