/*

5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”

6. Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

7. Crie um tipo que seja composto por um User OU por um Diretor
usando união de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor.

*/

import { Desenvolvedor } from './classes/Desenvolvedor';
import { Diretor } from './classes/Diretor';

// tipo para a atividade 7
type Funcionario = Desenvolvedor | Diretor;

export function atividade567() {
	// ATIVIDADE 5
	const daphne = new Desenvolvedor('Daphne', 23, 'Dev Front-End');
	const bruna = new Desenvolvedor('Bruna', 23, 'Dev Back-End', 3000);
	// console.log(daphne.show());
	// console.log(bruna.show());

	// ATIVIDADE 6
	const fabricio = new Diretor('Fabricio', 25, 5, 15000);
	const quym = new Diretor('Anderson Quym', 18, 4);
	// console.log(fabricio.show());
	// console.log(quym.show());

	// ATIVIDADE 7
	const listaDados: Array<Funcionario> = [daphne, bruna, fabricio, quym];

	listar(listaDados);
}

function listar(lista: Array<Funcionario>) {
	lista.forEach((item) => console.log(item.show()));
}
