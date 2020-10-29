/*Para usar o 'this' para amarrar algum objeto a funçao.
Metodo 1 */
function pessoa() {
        this.idade = 0
        setInterval(function () {/*E uma funçao que dispara uma outra funçao a partir de um determinado intervalo que foi 
                passado, entao pode passa uma funçao como outro parametro para outra funçao.*/
            this.idade++
            console.log('idade', this.idade)
        }.bind(this),1000)/*O 'bind(this)' foi usado para amarrar o objeto da funçao de pessoa, sendo assim sempre 
        vai apontar para pessoa*/
}
pessoa()

//Metodo 2
function data() {
        this.dia = 0
        const self = this /*Uma forma de deixar this em uma constante, com o fato de this variar depedendo da 
        chamada de funçao, colocando dentro de uma constante fara com que ela aponte diretamente para funçao
        a qual esta relacionada.*/
        setInterval(function(){
                self.dia++
                console.log('dia', self.dia)                
        },1000)
}
data()


