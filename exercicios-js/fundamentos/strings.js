const nome = "Eliseu"

console.log(nome.charAt(4)) //posição 4 na string
console.log(nome.indexOf('i')) //da a posição da letra i na string. Retorna -1 se não houver

console.log(nome.substring(1)) //inicia a leitura a partir da posição 1
console.log(nome.substring(0,5)) //inicia a leitura a partir da posição 0 e para antes da 5

console.log('Oliveira,'.concat(nome).concat(' Gomes de')) // concatena as strings
console.log('Oliveira,' + nome + (' Gomes de')) // concatena as strings
console.log(nome.replace('s','X')) //substitui s pela letra x
console.log(nome.replace(/\d/,'X')) // substitui numeors pela letra X
console.log(nome.replace(/\w/,'X'))//substitui a primeira letra pela pela letra x
console.log(nome.replace(/\w/g,'X'))//substitui todas as letras pela letra x

console.log('Eliseu,Elisama,Hunter'.split(',')) // Separa a string em um array usando a virgula

//tentando alteração