// FUNÇÕES ANÔNIMAS
// function nome() {

// }

// nome()

// SINTAXE DA FUNÇÃO ANONIMA
// function() {

// }

// function escreverOla(nome) {
//     console.log(`Olá ${nome}`)
// }

// escreverOla(true)

// function escreverOla(funcao) {
//     const nome = funcao()
//     console.log(`Olá ${nome}`)
// }

// sintaxe mais antiga
// escreverOla(function () {
//     let nome = 'André'
//     return nome
// })

// // arrow function
// escreverOla(() => {
//     let nome = 'Maria'
//     return nome
// })

// escreverOla(() => 'Joana')


// setTimeout(() => {
//     console.log('executou depois de 5segundos')
// }, 5000)

// setInterval(() => {
//     console.log('set interval')
// }, 10000)



// function gerarNome() {
//     let nome = 'André'
//     return nome
// }

// escreverOla(function () {
//     console.log('Hello')
// })



// ARROW FUNCTION


// ------------------------------------------------------
// METODOS ARRAYS



// TRADICIONAL
// for (let fruta of listaFrutas) {
//     if (fruta === 'Uva') {
//         console.log(fruta)
//     }
// }

let listaFrutas = [
    //[0]
    'Maça',
    //[1]
    'Melão',
    //[2]
    'Uva'
]

// FIND - percorre a lista de dados e retorna o dado que estamos buscando, aquele que atender À condicional passada para ele
// valor
// indice
// array
let frutaEscolhida = prompt('Informe uma fruta qualquer: ')

let frutaEscontrada = listaFrutas.find((fruta, indice, array) => fruta === frutaEscolhida)

// let frutaEscontrada = listaFrutas.find((fruta, indice, array) => {
//     if (indice > 0) {
//         return (fruta === frutaEscolhida)
//     }

//     return false
// })

// undefined, null, '', 0, false => falsy
if (frutaEscontrada) {
    console.log(`encontrei a fruta ${frutaEscontrada} na lista`)
} else {
    console.log(`Não encontrei a fruta buscada`)
}


// FINDINDEX => percorre a lista de dados e retorna o indice do dado que estamos buscando, aquele que atender À condicional passada para ele
// muito utilizado em atualização e exclusao de itens de uma lista
let indiceEncontrado = listaFrutas.findIndex((valor) => valor === frutaEscolhida) // posição no array

if (indiceEncontrado !== -1) {
    console.log(`encontrei a fruta na posição ${indiceEncontrado} da lista`)
    // listaFrutas[indiceEncontrado] = 'Laranja'

    // ATUALIZAR - exclui o valor antigo e substitui pelo
    // indiceEncontrado => [2]
    // 1 => quantidade de dados que sofrerão a modificação
    // 'Laranja => novo dado que irá subtituir o valor do indice passado
    let novosDados = ['Laranja', 'Melancia', 'Bergamota']
    listaFrutas.splice(indiceEncontrado, 2, ...novosDados)

    // EXCLUIR UM REGISTRO DA LISTA
    // listaFrutas.splice(indiceEncontrado, 1)

    console.log(listaFrutas)
} else {
    console.log('Não foi possivel encontrar o indice desse registro. Não existe na lista')
}


// MAP => SEMPRE VAI RETORNAR UMA LISTA CÓPIA, 
const novaLista = listaFrutas.map((valor) => valor.toUpperCase())
console.log(listaFrutas)
console.log(novaLista)


// FOREACH => não possui retorno
listaFrutas.forEach((valor, index, array) => {
    if (valor === 'Bergamota') {
        array[index] = 'Butiá'
    }
})

console.log(listaFrutas)



// FILTER => filtra uma determinada lista e retorna uma nova lista com os itens que atenderem a condicao passada
// []
const novaListaFiltrada = listaFrutas.filter((valor) => valor.length > 5)

console.log(listaFrutas)
console.log(novaListaFiltrada)








