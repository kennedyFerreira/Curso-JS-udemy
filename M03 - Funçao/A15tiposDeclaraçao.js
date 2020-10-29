//function declaration, a forma tradicional de declaraçao.
console.log(soma(2, 3))
function soma(x, y){ //Mesmo chamando essa funçao anterior a linha que foi declarada vai ter o acesso a ela.
    return x + y
}

//function expression, declarar uma funçao atribuindo ela a uma constante ou variavel.
const sub = function (x, y){//Nesse caso a chamada da funçao tem que ser apenas depois da linha e que foi declarada.
    return x - y
}
console.log(sub(2, 3))

//named function expression, e a funçao nomeada atribuida a uma constante ou variavel.
const mult = function mult(x, y){/*Ela tambem deve ter a chamada depois da funçao ter sido declarada, isso ocorre
    devido a declaraçao da funçao ser atribuida a uma constante ou variavel.*/
    return x * y
}
console.log(mult(2, 3))
