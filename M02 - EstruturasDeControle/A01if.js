function soBoaNota(nota) {
    if(nota >= 7){ //O qu fica entre parenteses vai ser testado com true e false
        console.log('Aprovado com ' + nota)
    }
}
soBoaNota(8.0)
soBoaNota(6.1)

function seForVerdade (valor){
    if(valor){ //Nesse caso qualquer valor true sera mostrado, mas caso o valor seja false nao sera executado.
        console.log('E verdade... ' + valor)
    }
}
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([2, 3])
seForVerdade({}) //Isso mostra que a condiçao de if testa se e true ou false.

/*O uso para 'if' nao tem a necessidade de uso de bloco em uma identaçao, porem como boa pratica sempre e bom
que se use as {} para evitar erros.*/