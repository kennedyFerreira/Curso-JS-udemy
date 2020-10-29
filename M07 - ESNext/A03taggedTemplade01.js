//a ideia e  conseguir processar uma tamplate string dentro de uma funçao
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'gui'
const situacao = 'aprovado'
console.log(tag `${aluno} esta ${situacao}`)

