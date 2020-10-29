//Operador '...' rest(juntar)/spread(spalhar)
//usar ret como parametro de funçao

//usar spread com objeto
const funcionario = {nome: 'maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usando spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', 'rafaela', ...grupoA]
console.log(grupoFinal)