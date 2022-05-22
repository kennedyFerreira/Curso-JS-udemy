function intervaloEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1 //Se fosse em 'while' o teste seria executado e ja seria falso entao nao executaria o codigo.
do {
    opcao = intervaloEntre(-1, 5)
    console.log(`Aopcao escolhuda foi ${opcao}`)
} while ( opcao != -1) /*Nesse caso primeiro ela executa depois faz o teste para a repetiçao, diferente de while
que primeir testa e depois executa.*/
console.log('fim')