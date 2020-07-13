// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}
/*function imprimirSoma(x,y,z){
    console.log(x + y + z)
}*/
imprimirSoma(2,5)
imprimirSoma(2,5,8)
// imprimirSoma(2,5,8,10)

// função com retorno
function soma(a, b = 0){// valor padrão pode ser definido
    return a + b
}

console.log(soma(4, 6))
console.log(soma(4))// soma com valor padrão)
