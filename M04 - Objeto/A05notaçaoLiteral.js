const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}//Maneira antiga de criar um objeto que recebe valores ja declarados.
const obj2 = {a, b, c} // Basta colocar o nome da constante ja declarada
console.log(obj1, obj2)

const nota = 'nota'
const valorAtributo = 7.87

const obj3 = {} 
obj3.nota = valorAtributo //Criando dinamicamente um objeto dando um atributo a outro atributo.
console.log(obj3)

const obj4 = {nota: valorAtributo} /*Forma mais recente e simples para criar um objeto com a 
mesmo objetivo que o exemplo de obj3*/
console.log(obj4)

const obj5 = {
    funcao1: function(){ //Forma antiga de criar uma funçao dentro de um objeto
        //Codigo da funcao
    },
    funcao2(){ //Forma nova de criar uma funçao dentro de um objeto.
        //Codigo da funcao
    }
}

