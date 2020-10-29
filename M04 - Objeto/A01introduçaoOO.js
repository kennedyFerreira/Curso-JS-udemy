//Codigo nao executavel! Sao conceitos de orientaçao objeto.

/*Procedural, e baseado em um procedimento estrutural de funçoe, tem um trecho de codigo com nomes(funçoes) que
podem ser usados em varias areas do codigo. Exemplo:
*/
processamento(valor1, valor2, valor3) //Esses valores sao processados pela funçao.

/*OO, o foco e diferente, enquanto no precedural as funçao que manipulam os  dados, em OO, os dados recebem 
valores e funçoes funçoes. Exemplo:
*/
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //
    }
}
objeto.processamento()
//A ideia e para que os objetos tem seus valores e dados e que um objeto possa se relacionar a outro.
//O objeto reune tanto dados como comportamentos(que seriam as Funçoes), agrupando tudo em um lugar so.

/*Pricipios importantes:
    1.Abstraçao -> e o termo usado para que o objeto criado tenha os dados que sejam necessarios para 
    o programa, nao tendo dados nao necessarios.
    2.Encapsulamento -> sao detalhes de implementaçao que ficam escondidos dentro de um objeto real, melhorando
    o nivel de comunicaçao entre a interface e o usuario, nem tudo que o codigo reserva tem necessidade do usuario
    ter contato na interface de comunicaçao.
    3.Herança -> e um metodo de reusar um objeto anterior, cria um objeto mais complexo a partir de um objeto
    anterio mais simples.
    4.Polimorfismo -> e um objeto que pode ter multiplas formas, e um termo comum em estruturas tipadas.
*/