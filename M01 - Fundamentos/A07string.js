const escola = "Cod3r"

console.log(escola.charAt(4)) //Mostra o indice na posicao selecionada da string.

console.log(escola.charCodeAt(3)) //Mostra o codigo na tabela sharcode do indice selecionado

console.log(escola.indexOf('3')) // Mostra se existe o valor indicado na string

console.log(escola.substring(1)) 
console.log(escola.substring(0,3))//Vai imprimir a partir do indice posterior ao selecionado

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!') //Uma forma de concatenar uma string a outra, usando um literal(uma string sem estar armazenado em uma variavel)

console.log(escola.replace(3, 'kennedy')) //Altera o indice selacionado pela string desejada.

console.log('ana, maria, pedro'.split(',')) //Forma de converter uma string para array


