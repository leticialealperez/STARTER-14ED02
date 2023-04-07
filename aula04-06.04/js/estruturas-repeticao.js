// 1 - REPETIÇÕES POR QUANTIDADE DE VEZES DEFINIDAS

// FOR

// 1 - Declaração da variavel que ficará controlando as repetições

// 2 = Teste lógico para saber se continua repetindo => Irá repetir enquanto x for (relação) valor
// Ex: contador <= 10

// 3 = modificação do valor da variavel de controle
// Ex: contador++


// ====== ORDEM DE EXECUÇÃO =====
// 1 - DECLARACAO
// 2 - TESTE LÓGICO
// 3 - AÇÃO
// 4 - MODIFICAR A VARIAVEL
// 5 - TESTAR NOVAMENTE

// ==== OBSERVAÇÕES =================
// INCREMENTO É A ULTIMA COISA A SER FEITA DENTRO DO FOR
// DEPOIS DE INCREMENTAR, O FOR TESTA DE NOVO

// ============= EXERCICIO ==========================================
// 1 - Escreva um algoritmo para encontrar a soma dos números de 1 a 10 

// let resultado = 0

// for(let contador = 1; contador <= 10 ; contador++) { 
//     resultado = resultado + contador  
// }

// alert(resultado) 

/*

Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
qualquer e mostre uma contagem até esse valor:

Exemplo:
Input: 35
Output: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

*/





// ========================================================
// 2 - REPETIÇÕES POR QUANTIDADE DE VEZES INDEFINIDAS

// WHILE - enquanto - só executa se for TRUE a condição
// primeiro testa e depois executa somente se for true a codicao

// let condicao = confirm("Está pronto para cadastrar os nomes?")
// let contador = 0

// while(condicao) {
//     let nome = prompt("Digite um nome para cadastro")
//     alert(`O nome digitado foi: ${nome}`)

//     contador++
//     alert(`Repetiu ${contador}x`)

//     condicao = confirm("Gostaria de digitar um novo nome?")
// }

// let valor = Number(prompt("Digite um valor")) // -5

// while(valor >= 1) {
//     alert(valor)


//     valor--
// }


//..

//..





// DO WHILE
// vai executar primeiro e testa no final
// let condicao = false

// do {
//     let nome = prompt("Digite um nome para cadastro")
//     alert(`O nome digitado foi: ${nome}`)

//     condicao = confirm("Gostaria de digitar um novo nome?")
// } while(condicao)

// let valor = Number(prompt("Digite um numero")) // -5

// do {
//     alert(valor)

//     valor--
// } while(valor >= 1)


/*

Faça um programa que leia a idade de 
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
na tela:

a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas têm 21 anos ou mais.

*/

/*
media = 0
contador = 1
idade = 0

media = (media + idade) / contador 

*/

let soma = 0;
let contador = 0;
let maiorQue21 = 0;

let condicao = true

while(condicao) {

    let idade = Number(prompt('Digite uma idade: ')) // 35
    soma = soma + idade 

    contador++

    if(idade >= 21) {
        maiorQue21++
    }

    condicao = confirm('Deseja cadastrar uma nova idade?')

}

document.write(`<p>Quantidade total de idades: ${contador}</p>`)
document.write(`<p>Média de idades: ${soma / contador}</p>`)
document.write(`<p>Quantidade total idade maior ou igual à 21 anos: ${maiorQue21}</p>`)
