console.log(Math.ceil(6.1)) /*O 'console' e uma notacao ponto para acessar uma funcao (a funcao nesse caso
seria o 'Math.ceil' que e usado para arredondar valores)*/

const obj1 = {}
obj1.nome = 'bola' 
//obj1['nome'] = 'bola2' //Outra forma de montar uma linha de cima.
//Uma forma de adicionar valores atraves de uma notaçao ponto em um objeto. A melhor forma e a primeira linha. 
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome /*O 'this' significa o nome associado ao objeto que foi criado a partir da funçao,
    tornando uma funcao publica.*/
    this.exec = function(){
        console.log('Exec...')  //O 'this' consegue criar atributos e funçoes que serao expostas fora da funçao.
    }
}
const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome) 
obj3.exec()/*A notacao ponto esta presente dentro da linguagem de js acessando os dados dentro
de funcoes, objetos entre outros.*/
