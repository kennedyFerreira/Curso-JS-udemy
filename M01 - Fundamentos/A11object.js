const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.90
prod1['deconto legal'] = 0.40 //Forma de atribuir valores no objetos
console.log(prod1) //O obejeto e uma coleçao de pares de chave e valor ex: nome e preco sao chaves, e o que receber sao os valores

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        desocnto: '10%'
    }
} 
console.log(prod2)//Criando objetos de formas aninhadas, um objeto dentro de outro objeto


