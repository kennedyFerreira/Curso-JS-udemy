for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i=', i) /*Isso mostra uma estrutura de controle de repetiçao ou looping, no caso do console
fora do bloco sera imprimindo o valor 10 pois saiu do laço e o 'var' nao tem escopo de bloco.*/

var funcs = []
for (var i = 0; i < 10; i++ ) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[5]() /*Devido ao 'var' nao ter escopo de funcao a varivel nao e respeitada retornando sempre o valor 
que sai do looping*/