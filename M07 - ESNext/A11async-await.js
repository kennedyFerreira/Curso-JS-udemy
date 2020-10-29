const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//tem objetivo de simplificar o uso de promise...
let obterAlunos = async () => { //Para usar o await dentro de uma funçao deve ter a funçao nomeada com o 'async'
    /*sempre que estiver lidando com uma funçao que retorna uma promise pode usar o 'await',
    e essa funçao so vai para o proximo passo se ela estiver resolvida ou entao estiver rejeitada recebendo o erro.*/
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//vai retornar um objeto AsyncFunctione em cima desse objeto que vai ser usado o '.then'

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

