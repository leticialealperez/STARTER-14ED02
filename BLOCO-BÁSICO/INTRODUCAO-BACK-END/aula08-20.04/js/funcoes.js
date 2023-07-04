// let nome = 'Leticia'
// let idade = 27



// CHAMADA
// escreverOla()
// escreverOla(nome, idade)

// CHAMADA
// let numero1 = Number(prompt('Digite o num1: '))
// let numero2 = Number(prompt('Digite o num2: '))
// let resultado = somar(numero1, numero2)

// if (resultado > 20) {
//     document.write('É maior que 20')
// }

let num1 = Number(prompt('Informe o numero 1:'))
let num2 = Number(prompt('Informe o numero 2:'))
let operador = prompt('Informe a operação (+, -, *, ou /): ')

let resultadoOperacao = calculadora(operador, num1, num2)

document.write(`${num1} ${operador} ${num2} = ${resultadoOperacao}`)


// DEFINIÇÃO
function somar(numero1, numero2) {

    let soma = numero1 + numero2

    // retornar é diferente de mostrar a informação como saida para o usuario
    return soma
}

// DEFINIÇÃO
function escreverOla(nome = 'Não Informado', idade = 0) {

    // utilização
    document.write(`<h2>Olá, ${nome}. Sua idade é ${idade}</h2>`)

}

// DEFINIÇÃO
// function calculadora(operacao, numero1, numero2) {
//     let resultado = 0;

//     switch (operacao) {
//         case '+':
//             resultado = numero1 + numero2
//             break;
//         case '-':
//             resultado = numero1 - numero2
//             break;
//         case '/':

//             if (numero2 === 0) {
//                 resultado = 'Não é possível dividir por zero.'
//             } else {
//                 resultado = numero1 / numero2
//             }

//             break;
//         case '*':
//             resultado = numero1 * numero2
//             break
//         default:
//             document.write('Operador inválido!')
//     }

//     return resultado
// }

function calculadora(operacao, numero1, numero2) {

    switch (operacao) {
        case '+':
            return numero1 + numero2
        // nenhum outro caso é executado
        case '-':
            return numero1 - numero2
        // nenhum outro caso é executado

        case '/':

            if (numero2 === 0) {
                return 'Não é possível dividir por zero.'
            } else {
                return numero1 / numero2
            }

        // nenhum outro caso é executado
        case '*':
            return numero1 * numero2

        default:
            document.write('Operador inválido!')
    }


}






