let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) //Quando se chama o this dentro de uma funçao estara mexendo no escopo global.
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj) /*Quando o this foi apontado para o obj, parou de ser apontado para o global, isso ocorre
pela funçao bind*/

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //Em uma funçao arrow o this nao aponta pro global nao variando conforme a chamada.

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) /*Mesmo tentando mudar a referencia do this em uma arrow function isso nao ira acontecer, 
o this em uma funcao arrow e associado ao contexto no qual a funçao foi escrita, nao variando de forma alguma.*/

