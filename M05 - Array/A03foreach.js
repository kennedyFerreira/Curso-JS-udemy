const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice, array){ /*foreach e funcao que funciona como um laco que percorre todo o array
    recebendo tres parametro o primeiro e o valor e o segundo é o parametro e o terceiro e o proprio array*/
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})
aprovados.forEach((nome, indice) => console.log(`${indice + 1} ${nome}`))//pode-se suprimir os parametros nao declarando ele na funcao.

//Exercicio para um soluçao para percorrer o array usando uma funçao.
function implementaçaoForEach(aprovados){
    for(let i = 0; i < aprovados.length; i++){
        console.log(`${i + 1} ${aprovados[i]}`)
    }
}
implementaçaoForEach(aprovados)


