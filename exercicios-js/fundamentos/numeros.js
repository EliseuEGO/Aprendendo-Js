const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) //isInteger da o valor booleano se o numero é inteiro ou não

const prova1 = 9.589
const prova2 = 5.699

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 +peso2)

console.log(media.toFixed(2)) //toFixed é usado pra limitar o numero de decimais

// toFixed não altera o valor da variavel, ele apenas o mostra com o numero de decimais solicitados
// toString mostra o valor como string. Se colocar um numero nele, ele transforma a variavel em binario 
console.log(media.toString(2))

// number com 'n' minusculo é o tipo inteiro
// Number com 'N' maiusculo é uma função