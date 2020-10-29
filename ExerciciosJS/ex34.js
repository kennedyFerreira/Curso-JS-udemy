function strings(string1, string2){
    let resultado = true
    for(let s = 0; s < string1.length; s++){
        let resultado1 = string1.charAt(s).toLowerCase()
        for(let s2 = 0; s2 < string2.length; s2++){
            let resultado2 = string2.charAt(s2).toLowerCase()
            if(resultado1 == resultado2 && string1.length === string2.length){
                resultado = true
                break
            }else{
                resultado = false
            }
        }            
        if(resultado == false){
            return resultado 
        }
    }
    return resultado
}

console.log(strings('abc', 'cba'))
