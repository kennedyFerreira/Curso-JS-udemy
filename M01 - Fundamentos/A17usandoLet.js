let numero = 1
{ 
    let numero = 2
    console.log('dentro =', numero)

}
console.log('fora =', numero) /*No caso do 'let' tem visibilidade apenas dentro dos blocos, tendo prioridade
no escopo menor, mesmo que as variaveis tenham o mesmo nome devido ao escopo o valor nao sera sobreposto como
acontece com o 'var'.*/