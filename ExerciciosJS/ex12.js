function fatorial(num){
    let fat = 1
    for(num ; num > 1; num--){
        fat *= num
    }
    return fat
}
console.log(fatorial(5))

