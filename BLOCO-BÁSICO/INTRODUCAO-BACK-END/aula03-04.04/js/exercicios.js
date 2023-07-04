/*
 
    A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.


*/
let kmPercorridos = Number(prompt('Qual a quantidade de Km percorridos?'))
let diasAlugados = Number(prompt('Qual a quantidade de dias que o carro foi alugado?'))

let valorDia = diasAlugados * 90
let valorKm = kmPercorridos * 0.2

let total = valorDia + valorKm

document.write(`Valor total do carro alugado R$ ${total.toFixed(2)}.`)

// OBS: variavel.toFixed(2) => fará com que o número seja mostrado com 2 casas decimais (Ex: 110.55)


/*

Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

*/ 


/*

Faça um algoritmo que pergunte a distância que um passageiro deseja 
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

*/



/*

Crie um programa que leia o tamanho de três segmentos de reta. 
Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

*/

/*

 Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo:
 - O primeiro valor é o maior
 - O segundo valor é o maior
 - Não existe valor maior, os dois são iguais

*/


/*

Faça um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m². O programa também 
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
 - Abaixo de 100m² = TERRENO POPULAR
 - Entre 100m² e 500m² = TERRENO MASTER
 - Acima de 500m² = TERRENO VIP

*/
const largura = Number(prompt("Digite a largura do terreno em metros"));
const comprimento = Number(prompt("Digite o comprimento do terreno em metros"));
const area = largura * comprimento;

if(area < 100) {
    console.log("Terreno popular")
} else if(area >= 100 && area <= 500) {
    console.log("Terreno master")
} else {
    console.log("Terreno VIP")
}

// and => &&
// V e V => V
// DIFERENTE DISSO? RETORNO FALSE

// or => ||
// F ou F => F
// DIFERENTE DISSO? RETORNO TRUE



/*

Desenvolva um programa que leia o nome de um funcionário, seu salário, 
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - acima de 10 anos: aumento de 20%

*/

let nome = prompt( 'Digite seu nome: ');
let anoempresa = Number(prompt('Em que ano entrou na empresa? '));
anoempresa = 2023 - anoempresa
let salario = Number(prompt("Agora, digite seu salário: "));
let novosal;

if(anoempresa<=3) {
    novosal = salario*0.03 + salario
    document.write(`Seu novo salário é de: ${novosal}`)
}
else if(anoempresa<=10) {
    novosal = salario*0.125 + salario
    document.write(`Seu novo salário é de: ${novosal}`)
}
else {
    novosal = salario*0.2 + salario
    document.write(`Seu novo salário é de: ${novosal}`)
}

// OBS: else só executa se as condições acima forem false
// OBS: QUANDO JS ACHAR 1 CONDIÇÃO (TRUE), NÃO EXECUTA AS DEMAIS



// ============================================================================
// Problemas de uso do prompt() - Usuário é leigo
// 1 - E SE O USUÁRIO CLICAR NO 'CANCELAR'?
// Resposta: o valor retornado será null
// Um dado null quando convertido usando Number() resulta no número 0


// 2 - E SE O USUÁRIO NAO DIGITAR NADA?
// Resposta: o valor retornado será "" (string vazia)
// Um dado "" (string vazia) quando convertido usando Number() resulta no número 0

// EXPLICAÇÃO 1 E 2:
// A regra do Javascript define que toda variavel que conter os valores:
// null, undefined, "", 0 e false será considerada como falsy (falso no contexto booleano - link da documentação https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
// Ao converter um valor falsy utilizando Number() teremos 0 como resultado.



// E SE ELE DIGITAR UM TEXTO AO INVÉS DE NÚMERO?
// Resposta: o valor retornado através da conversão de um texto (que não seja apenas número) para number utilizando Number() resultará em NaN
// NaN significa Not-A-Number e só pode ser testado com o método isNaN()
// link da documentação https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NaN

// if(isNaN(kmPercorridos)) {
//     // isNaN => digitou texto => errou
//     console.log("Digite apenas numeros")
    
// } else {
//     // calculo visando o acerto
// }
