/*O this dentro de um funçao arrow e fixo, nao e influenciado pela chamada de locais diferentes, sempre vai ser
baseado no contexto no qual a funçao foi escrita.*/
pessoa = () => {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log('idade', this.idade)
    },1000)
}
pessoa()