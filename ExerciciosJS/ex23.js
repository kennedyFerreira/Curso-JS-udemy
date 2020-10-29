function aluno(codigo, nota1, nota2, nota3){

    switch(codigo){
        case 1:
            return aluno1(nota1, nota2, nota3)
            break
        case 2:
            return aluno2(nota1, nota2, nota3)
            break
        default:
            return 'aluno indisponivel'
    }  
}
function aluno1(nota1, nota2, nota3){
    let nomeAluno = 'Kennedy'
    let notas = []
    let media = (nota1 + nota2 + nota3) / 3
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
        if (media >= 5){
            return console.log(`${nomeAluno}: teve notas ${notas}; com media ${media}, e esta APROVADO`)
        }else{
            return console.log(`${nomeAluno}: teve notas ${notas}; com media ${media}, e esta REPROVADO`)
        }
    
}
function aluno2(nota1, nota2, nota3){
    let nomeAluno = 'Ariane'
    let notas = []
    let media = (nota1 + nota2 + nota3) / 3
    notas.push(nota1)
    notas.push(nota3)
    notas.push(nota2)
        if (media >= 5){
            return console.log(`${nomeAluno}: teve notas ${notas}; com media ${media}, e esta APROVADO`)
        }else{
            return console.log(`${nomeAluno}: teve notas ${notas}; com media ${media}, e esta REPROVADO`)
        }
    
}
aluno(1, 3, 5, 4)
aluno(2, 10, 8, 9)