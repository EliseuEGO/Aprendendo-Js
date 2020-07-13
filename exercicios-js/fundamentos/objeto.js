const produto1={}
produto1.nome = 'Zenfone' //atributo alocado dinamicamente dentro do objeto
produto1.preco = 10000
produto1['Temos desconto'] = 0.40 // evitar atributoos com espaço

console.log(produto1)

const produto2 = { //outra forma de fazer um obejeto
    nome: 'camisa',
    preco: 30.2
}