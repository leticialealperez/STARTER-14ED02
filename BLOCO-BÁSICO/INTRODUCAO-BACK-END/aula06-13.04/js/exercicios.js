let lista = [
	-31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 50, 15, 1, 4,
];

// 7 - Escreva um algoritmo para buscar apenas os números positivos da lista
let listaPositivos = [];

// for (let indice = 0; indice < lista.length; indice++) {
// 	if (lista[indice] > 0) {
// 		// console.log(lista[indice]);
// 		listaPositivos.push(lista[indice]);
// 	}
// }

// para cada numero de lista faça
for (let numero of lista) {
	if (numero > 0) {
		listaPositivos.push(numero);
	}
}

// console.log(listaPositivos);

// 8 - Escreva um algoritmo para buscar apenas os números ímpares da lista
let listaImpares = [];

// for (let indice = 0; indice < lista.length; indice++) {

// 	if (lista[indice] % 2 === 1 || lista[indice] % 2 === -1) {
// 		listaImpares.unshift(lista[indice]);
// 	}

// }

for (let numero of lista) {
	if (numero % 2 === 1 || numero % 2 === -1) {
		listaImpares.unshift(numero);
	}
}

// console.log(listaImpares);

// 9 - Escreva um algoritmo para calcular e encontrar a soma de todos os números da lista
//let soma = 0;

// for (let indice = 0; indice < lista.length; indice++) {
// 	soma += lista[indice];
// }

// for (let numero of lista) {
// 	// soma = soma + numero;
// 	soma += numero;
// }

// console.log(soma);

// 11 - Escreva um algoritmo para calcular e encontrar a média de todos os números positivos da lista
// console.log(soma / lista.length);

// 10 - Escreva um algoritmo para buscar apenas os números repetidos na lista

// 12 - Escreva um algoritmo para encontrar o maior número da lista

// =====================================
// EXERCICIOS DOC CLASS

/*

Criar um array e percorrê-lo utilizando o loop for
Crie um array com o nome "nomes" e adicione 4 nomes de pessoas que você conhece
Utilize o loop for para percorrer o array e exibir os nomes na tela

*/
// let nomes = ['Vanágila', 'William', 'Richardson', 'João'];

// for (let i = 0; i <= nomes.length - 1; i++) {
// 	console.log(`${nomes[i]}`);
// }

/*

Criar um array e percorrê-lo utilizando o loop for of
 - Crie um array com o nome "numeros" e adicione 5 números de sua escolha
 - Utilize o loop for of para percorrer o array e exibir a soma dos números na tela

*/

// let numeros = [1, 2, 3, 4, 5];
// let soma = 0;

// for (let num of numeros) {
// 	soma += num;
// }

// console.log(soma);

// Ufa

/*

Utilizar os métodos push, pop, unshift e shift para manipular um array

*/

// Crie um array com o nome "frutas" e adicione 3 tipos de frutas de sua escolha
// 1 - Utilize o método push para adicionar uma fruta no final do array
// 1.1 - Exiba o array resultante na tela
let frutas = ['Maça', 'Morango', 'Melancia'];

frutas.push('Laranja');
console.log(frutas);

// 2 - Utilize o método pop para remover a última fruta do array
// 2.1 - Exiba o array resultante na tela
frutas.pop();
console.log(frutas);

// 3 - Utilize o método unshift para adicionar uma fruta no início do array
// 3.1 - Exiba o array resultante na tela

frutas.unshift('Banana');
console.log(frutas);

// Utilize o método shift para remover a primeira fruta do array
frutas.shift();
console.log(frutas);
