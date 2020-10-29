{
    {
        {
            {
                var sera = 'Sera??'
            }
        }
    }
}
console.log(sera) 
var numero = 1
{ 
    var numero = 2
    console.log('dentro = ', numero)

}
console.log('fora = ', numero) /*O escopo e o local onde a variavel ou constante e visivil, esses exemplos 
mostram que o 'var' e visivel idependente dos blocos que nao sejam uma funcao, sendo ela uma variavel global.*/

function teste(){
    var local = 123
    console.log(local) //O 'var' e visivel apenas no bloco da funcao, ela na e uma variavel global
}
teste()
//console.log(local), se a 'var' estiver dentro de uma funcao ela nao e visivel fora dos blocos.