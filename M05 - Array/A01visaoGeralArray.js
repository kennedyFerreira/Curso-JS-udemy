console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //uma forma de criar array a partir da funçao new (nao e recomendado)
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana'] //e recomendado criar um array de forma literal []
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // nesse caso retornara undefined pq nao existe esse elemento no array

aprovados[3] = 'paulo' // uma forma para adicionar um elemento no array
aprovados.push('abia') // a forma mais apropriada para adicionar elementos no array
console.log(aprovados.length)

aprovados[9] = 'rafael' /* qaundo se adiciona um elemento em uma possiçao muito maior que o tamanho todo valor existente entre 
essas posicoes nao declaradas sera undefined*/
console.log(aprovados.length)
console.log(aprovados[5, 6, 7, 8])
console.log(aprovados)

aprovados.sort() // Essa funçao organiza os elementos ou por ondem alfabetica ou numerica.
console.log(aprovados)

delete aprovados[1] // uma forma de excluir um indice com o operador delete 
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1 , 'elemento1', 'elemento2')/* serve para remover ou adicionar elementos, onde a sintaxe é (a partir de 
qual elemento quer remover, quantos elementos serao removidos, e caso queira adiconar elementos usar aspas e separar por virgulas) */
console.log(aprovados)
