/*Para usar o 'this' para amarrar algum objeto a funçao.
Metodo 1 */
class pessoa {
        constructor() {
                this.idade = 0
                setInterval(function () {
                        this.idade++
                        console.log('idade', this.idade)
                }.bind(this), 1000) /*O 'bind(this)' foi usado para amarrar o objeto da funçao de pessoa, sendo assim sempre
        vai apontar para pessoa*/

        }
}
new pessoa()

//Metodo 2
class data {
        constructor() {
                this.dia = 0
                const self = this /*Uma forma de deixar this em uma constante, com o fato de this variar depedendo da
        chamada de funçao, colocando dentro de uma constante fara com que ela aponte diretamente para funçao
        a qual esta relacionada.*/


                setInterval(function () {
                        self.dia++
                        console.log('dia', self.dia)
                }, 1000)
        }
}
new data()


