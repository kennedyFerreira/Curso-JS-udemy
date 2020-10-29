function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2 //'||' ou logico
    const comprarTv50 = trab1 && trab2 //'&&' e logico
    const comprarTv32 = trab1 != trab2 //Uma forma de ter um ou exclusivo
    const manterSaudavel = !comprarSorvete //Negaçao logica, operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))