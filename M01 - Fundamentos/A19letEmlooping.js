for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log('i=', i) neste caso o 'i' nao estara disponivel fora dos blocos devido ao escopo de 'let'.

let funcs = []
for (let i = 0; i < 10; i++ ) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[4]()/*O let respeita do escopo do looping fazendo com que seja respeitado o valor da variavel dentro do
array quando adicionado pela funçao*/