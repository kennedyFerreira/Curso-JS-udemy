class lancamento{
    constructor(nome = 'generico', valor = 0){ // e uma funçao de que por padrao ela e chamada no momento que a classe e chamada
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){ // dentro das classe podem ter mais funçoes
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 45000)
const contaDeLuz = new lancamento('luz', -220)
const contaDeAgua = new lancamento('agua', -100)
const contaDeMercado = new lancamento('mercado', -1000)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeMercado)
console.log(contas.sumario())