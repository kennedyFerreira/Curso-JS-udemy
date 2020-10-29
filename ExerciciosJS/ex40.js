function notas(vetor){
    vetor.forEach(element => {
        if(element < 4.9){
            console.log('D')
        }else if(element < 6.9){
            console.log('C')
        }else if(element < 8.9){
            console.log('B')
        }else if(element < 10){
            console.log('A')
        }else{
            console.log('Nota invalida')
        }
    });
}
notas([4, 6, 9, 7, 5, 3, 1])