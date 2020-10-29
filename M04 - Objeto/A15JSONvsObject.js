//JSON(JavaScript Object Notation) e um formato de dados, e nao tem a presença de funcao como o Objeto.

//convertendo um objeto para um JSON
const obj = {a: 1, b:2, c:3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj))// usa 'stringify' para essa conversao.

//convertendo um JSON para um objeto
console.log(JSON.parse('{"a": 1,"b": 2,"c":3}')) // todos as string devem ter aspas duplas.
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}')) /* alguns valores validos em JSON 
e a forma que sao passados*/
