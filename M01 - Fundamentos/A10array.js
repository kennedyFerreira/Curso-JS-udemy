const valores = [7.7,8.9,6.3,9.2] //Criando array literal usa [] e separa os valores com ,
console.log(valores[0],valores[3]) //Para imprimir um valor basta selecionar entre [] a posiçao desejada.
console.log(valores[4]) //E uma posiçao que nao existe dentro do array ela e declarada como undefined

valores[4] = 10
console.log(valores) //Uma forma de adicionar um valor em uma posiçao nao existente

console.log(valores.length) //Vai mostrar quantos elementos tem no array

valores.push({id: 3},false,null,'teste') //Vai adicionar o valor desejado na ultima posiçao do array
console.log(valores)

console.log(valores.pop()) //Vai retirar e retornar o ultimo valor do array

delete valores[0] //Vai deletar o valor na posiçao selecionada
console.log(valores)

console.log(typeof valores) //O array e do tipo objeto em js 