// criar o arquivo do exercicio
// criar a função dentro do arquivo
// EX: exercicio1

/*
2. Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
*/

import { calcMediaPeso } from './Q2';
import { lancarTransacao } from './atividade3';

const listaNotas = [
	//[0]
	{
		valor: 10,
		peso: 2,
		// 20
	},
	//[1]
	{
		valor: 8,
		peso: 3,
		// 24
	},
	{
		valor: 9,
		peso: 2,
		//18
	},
	{
		valor: 7,
		peso: 3,
		// 21
	},
];

console.log(calcMediaPeso(listaNotas));

/*
3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar.
*/

lancarTransacao({
	tipo: 'entrada',
	valor: 10,
});

lancarTransacao({
	tipo: 'saida',
	valor: 20,
});

/* 

4. Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.

*/

/*
5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”
*/

/*
6. Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
*/

/*
7. Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.
*/
