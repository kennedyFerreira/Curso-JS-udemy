const sequencia = {
    _valor: 1, // ''_'' E uma convençao para que esse valor seja acessado apenas internamente.
    get valor() { 
        return this._valor++
    },
    set valor(valor){ //Sao formas de encapsular fazendo um controle sobre os calores que seram atribuidos ao objeto
        if( valor > this._valor){
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor)
sequencia.valor = 98// vai ser ignorado o valor atribuido menor do que ja foi definido em 'set'
console.log(sequencia.valor)
