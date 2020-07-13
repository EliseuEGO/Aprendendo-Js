const valores = [7.7,8,9.6,4.3]

console.log(valores[0],valores[3])// acessar indice 0 e indice 3
console.log(valores[4])//indice 4 não existe então vai dar indefinido

valores[4]= 10 //definindo valor para indice 4
console.log(valores[4])//

console.log(valores.length) // ler o numero de valores no array

valores.push({id:3}, false, null, 'teste') //push para add novos conteudos ao array
console.log(valores)

console.log(valores.pop())// imprime o ultimo elemento do array de dps apaga ele
delete valores[0]// apaga o primeiro elemento do array
console.log(typeof valores) //array é do tipo objeto