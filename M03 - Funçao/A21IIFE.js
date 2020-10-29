//IIFE -> Immediately Invoked Function Expression
/*Funçao autoinvocada tem o objetivo de fugir do escopo global, evitando de estar manipulando o escopo global
tento o escopo da funçao sendo apenas local*/

(function(){
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()//A funçao e criada dentro de (),e no final do codigo coloca-se outro () para que a funçao possa ser invocada.

