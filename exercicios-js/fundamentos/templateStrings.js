const nome = "Eliseu"
const concatenacao = 'olá ' + nome + '!' //concatenação normal

const template = `
    olá 
    ${nome}!`// concatenação com template que usa a cráse e o cifrão para definir

    console.log(template)
    console.log(concatenacao)
    console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Está tudo bem... ${up('porque eu estou aqui')}!!`)//Da pra usar o template com função tbm