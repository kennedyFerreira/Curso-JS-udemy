class meuObjeto {
    falar() {
        console.log(`Bom dia! Meu nome é ${this.nome}`)
        console.log(`Tenho ${this.idade} anos de idade`)
    }
}

const obj1 = new meuObjeto
obj1.nome = 'kennedy'
obj1.idade = 25
obj1.falar()

const obj2 = new meuObjeto
obj2.nome = 'Ariane'
obj2.idade = 27
obj2.falar()
    
