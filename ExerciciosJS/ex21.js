function planoDeSaude(idade){
    
    if (idade < 10){
        return `O palano tem custo de R$180`
    }else if (idade < 30){
        return `O palano tem custo de R$150`
    }else if (idade < 60){
        return `O palano tem custo de R$195`
    }else{
        return `O palano tem custo de R$230`
    }
}
console.log(planoDeSaude(9))
console.log(planoDeSaude(20))
console.log(planoDeSaude(50))
console.log(planoDeSaude(70))
