/*E usado para desviar o fluxo de codigos, tem a observaçao de ser usado apenas em casos realmentes necessarios
pois a mudança de fluxo dentro de um codigo pode tornar menos legivel.*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums){
    if (x == 5) {
        break /*O break age em cima do bloco mais proximo de 'for', 'while e'switch', e nao age no bloco de 'if',
        o break vai interromper o laco e sair para a proxima setença de codigo fora do laço ao qual esta relacionado.*/
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue /*O continue age em cima do bloco mais proximo de 'for' ou 'while , e nao age no bloco
        de 'if', o continue vai interroper a execuçao atual e nao vai sair fora do laco, vai apenas pular para 
        a proxima repetiçao.*/
    }
    console.log(`${y} = ${nums[y]}`)
}

