function formasTriangulo(x, y, z){
    if (x == y && y == z){
        return 'trianguloEquilatero'
    }else if(x == y || y == z || z == x){
        return 'trianguloIsosceles'
    }else{
        return 'trianguloEscaleno'
    }
  
}
console.log(formasTriangulo(10, 10, 10))
console.log(formasTriangulo(10, 10, 5))
console.log(formasTriangulo(10 , 5, 1))