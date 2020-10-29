const pessoa = {
    saudaçao: 'Bom dia',
    falar (){
        console.log(this.saudaçao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() /*Conflito entre paradigmas: funcional e OO(orientador objeto), e com isso o valor ira retornar
undefined.*/

const falarDePessoa = pessoa.falar.bind(pessoa)/*'bind' e uma funçao que passa um objeto no qual voce quer que 
seja resolvido o 'this' que fica dentro de (), e um metodo responsavel para amarrar um determinado objeto pra
ele ser o dono da execuçao da funçao, sempre que voce referencia o 'this' o 'this' sera o objeto que passo para 
a funçao 'bind'*/
falarDePessoa()


