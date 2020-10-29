function progressaoAritimetica(n, a1, r){
    let pa = a1
    for(let i = 1; i < n; i++){
        let termo = i
        pa += r
        console.log(termo, pa)
   }    
}
progressaoAritimetica(5, 2002, 4)

function progressaoGeometrica(n, a1, r){
    let pg = a1
    for(let i = 1; i < n; i++){
        let termo = i 
        pg *= r
        console.log(termo, pg)
    }
}
progressaoGeometrica(5, 123, 4)