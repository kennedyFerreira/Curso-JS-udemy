let dobro = function (a){
    return 2*a
}
dobro = (a) => {
    return 2*a
} //E uma funçao arrow com corpo de funçao para caso tenha mais de uma linha de codigo.
dobro = a => 2*a //E um return e implicito, usado para codigos que tem uma unica linha
console.log(dobro(Math.PI).toFixed(2))

let ola = function() {
    return 'Ola'
}
ola = () => { //Mesmo que nao receba nenhuma parametro tem que ser colocado os (). MAneira padrao.
    return 'Ola'
}
ola = _ => 'Ola' //Pode ser passado um parametro e nao usar na chamada da funçao. Maneira que pode ser encontrado em alguns codigos
console.log(ola())
