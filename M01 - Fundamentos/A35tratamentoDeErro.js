//Palavras reservadas para verificaçao de Erro sao: 'try', 'catch', 'throw'.
function tratarErroELancar(erro) {
    let id
    if (erro.name != 'TypeErro') {
       id = 1
    }
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date,
        id: id
    }
} 
function imprimirGritando(obj) {
   try { 
       console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { // vai ser sempre executado msm que nao tenha o erro.
        console.log('final')
    }
}
const obj = {nome: 'Kennedy'} //Aqui esta o erro 'nome' e pra ser 'name'.
imprimirGritando(obj)