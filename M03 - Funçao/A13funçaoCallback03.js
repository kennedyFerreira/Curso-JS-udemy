/*Codigo para ser executado no browser. E um exemplo de funçao callback no bowser, o 'onclick' e o evento 
para que retorne a funçao, sempre que ocorrer um click no 'body' da pagina o evento acontecera e sera chamado
a funçao idependente de quantas vezes ocorrer os clicks.*/

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('o evento occoreu!')
}
