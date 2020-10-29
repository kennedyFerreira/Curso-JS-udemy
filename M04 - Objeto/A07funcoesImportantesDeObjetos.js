const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) // vai pegar todas as chaves de um objeto sem os valores.
console.log(Object.values(pessoa)) // vai pegar todos os valores sem as chaves.
console.log(Object.entries(pessoa)) //vai da todos subarrays que estao com os pares chave/valores.

Object.entries(pessoa).forEach(element => { // pode ser percorrido com uma funçao do array
    console.log(`${element[0]} : ${element[1]}`)
});
Object.entries(pessoa).forEach(([chave, valor]) => { /* pode ser percorrido com uma funçao do array e 
    criar um destructuring para verificar todo o array do objeto*/
    console.log(`${chave} : ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode ser um objeto a ser listada (visivel)
    writable: false, //pode ser modificado ou nao.
    value: '01/01/2020' //e pode ser atribuido o valor da chave que foi definida('dataNascimento')
}) /*Para definir caracteristicas de um objeto, podendo deixar ele visivel ou nao, 
ser alterada ou nao, etc...*/

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign 
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) /* Se a chave tiver o mesmo nome de outra constante como neste caso,
 o valor de 'a' de 'o2' vai se sobrepor o valor de 'a' de 'dest'.*/
 console.log(obj)