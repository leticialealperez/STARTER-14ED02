// O QUE SÃO OBJETOS?
// mas serão variáveis estruturas que serão capazes de armazenar diversos sados sobre uma mesma coisa
// regra de nome de atributo é a mesma de variaveis

// COMO DECLARAR UM OBJETO?
let usuario = {
    email: 'joao@teste.com',
    password: '1234',
    estaAtivo: true
}

let produto = {
    codigo: 1,
    nome: 'Computador da Xuxa',
    preco: 300.00,
    disponibilidade: false,
}

// lista[0]
// COMO ESTÃO ESTRUTURADOS?

// 1 - PROPRIEDADE/ATRIBUTO/INDICE/CHAVE/KEYS - chave para acessar um determinado valor de um objeto

// acessar/mostrar todas as propriedades de um objeto
console.log(produto)

// acessar/mostrar um unico dado desse objeto dai a gente acessa a propriedade em especifico
console.log(produto.preco)

// 2 - VALOR - o dado que está armazenado em uma determinada propriedade



// TIPOS DE DADOS QUE PODEMOS SALVAR EM UM OBJETO?

// TODOS!
// strings, number, booleanos, arrays, objetos...
const aluno = {
    nome: 'Joaquim',
    idade: 27,
    reprovado: true,
    notas: [9.8, 7.1, 6],
    matricula: {
        codigo: '12345',
        curso: 'Starter Full Stack',
        turma: 'Growdev'
    }
}

// OBS: o html e a janela do navegador só consegue mostrar dados primitivos (strings, numbers e booleanos)

// COMO ACESSAR OS DADOS DE UM OBJETO?
console.log(`${aluno.nome}, ${aluno.idade}`)


// COMO ADICIONAR DADOS DURANTE A EXECUÇÃO DO SCRIPT?
aluno.matricula.edicao = prompt('Edição do Programa de Formação: ')

aluno.matricula.codigo = '3456'

console.log(aluno.matricula)


// COMO REMOVER DADOS DURANTE A EXECUÇÃO DO SCRIPT?
delete aluno.reprovado
console.log(aluno)


const aluno2 = {
    nome: 'Joaquim',
    idade: 27,
    reprovado: true,
    notas: [9.8, 7.1, 6],
    matricula: {
        codigo: '12345',
        curso: 'Starter Full Stack',
        turma: 'Growdev'
    }
}

// UTILIZANDO LAÇOS DE REPETIÇÃO PARA PERCORRER OS DADOS DE UM OBJETO
for(let key in aluno2) {

    document.write(`<p>${key} - ${aluno2[key]}</p>`)

    if(key === 'reprovado') {
        break
    }

}

// ACESSAR PROPRIEDADE DE UM OBJETO
// aluno2.nome
// aluno2['nome']


