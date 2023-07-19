/*

Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.

*/
type Produto = {
	id: number;
	nome: string;
	preco: number;
};

const produtos: Array<Produto> = [];

export function cadastrar(produto: Produto) {
	// verificar se o id que esta vindo no parametro já existe na lista
	// encontra algum - se algum item da lista atender à condição passada o retorno dele é true
	// every - TODOS - &&
	// some - ALGUM (ou menos um) - ||
	const existe = produtos.some((item) => item.id === produto.id); // true ou false

	if (existe) {
		console.log('Produto já cadastrado pelo ID informado');
		return;
	}

	if (produto.preco <= 0) {
		console.log('Não pode ser cadastrado com valor negativo ou zero');
		return;
	}

	produtos.push(produto);
	// console.log(produtos);
}

export function listar() {
	produtos.forEach((item) => console.log(`${item.nome} - R$${item.preco}`));
}

export function excluir(identificador: number) {
	// preciso saber QUAL item da lista estará sendo removido - ID
	// [0, 1, 2]
	const indiceExcluir = produtos.findIndex(
		(item) => item.id === identificador
	); // -1 ou 0, 1, [2], 3, 4

	if (indiceExcluir === -1) {
		console.log('Este ID não existe');
		return;
	}

	// SPLICE
	produtos.splice(indiceExcluir, 1);
	// console.log(produtos);
}

export function atualizar(
	novoNome: string,
	novoPreco: number,
	identificador: number
) {
	const indiceEncontrado = produtos.findIndex(
		(item) => item.id === identificador
	); // -1, ou 0, 1, 2, [3], 4

	if (indiceEncontrado === -1) {
		console.log('Este ID não existe');
		return;
	}

	produtos[indiceEncontrado].nome = novoNome;
	produtos[indiceEncontrado].preco = novoPreco;
	// console.log(produtos);
}
