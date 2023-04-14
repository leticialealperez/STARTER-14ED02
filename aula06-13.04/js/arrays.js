// O QUE SÃO ARRAYS?

// COMO DECLARAR UM ARRAY?
// let idades = [27, 10, 35, 78];
let nomes = ['Ana', 'Joao', 'Maria', 'Joaquim'];

// COMO ESTÃO ESTRUTURADOS?

// 1 - INDICE - chave para acessar um determinado valor de uma lista
// console.log(nomes[1]); // 'Maria'

// 2 - VALOR - o dado que está armazenado em um determinado indice
// console.log(nomes[0]); // 'Jão'
// console.log(nomes[1]); // 'Maria' <= valor
// console.log(nomes[2]); // 'Pedro'
// console.log(nomes[3]); // 'Joaquim'
// console.log(nomes[4]); // undefined

//console.log(nomes.length); // 4 => mostra o tamanho total da nossa lista, ou seja a quantidade total de itens

// OBS: o ultimo indice de uma lista sempre será tamanho - 1
//console.log(nomes[nomes.length - 1]);

// DADOS QUE PODEMOS SALVAR EM UM ARRAY?
// strings e numeros

// COMO ACESSAR OS DADOS DE UM ARRAY?
// lista[indice]

// COMO ADICIONAR DADOS DURANTE A EXECUÇÃO DO SCRIPT?
// let listaCompras = [];
// let continuar = false;

// do {
// 	const produto = prompt(
// 		'Informe um produto a ser adicionado na sua lista de compras: '
// 	);

// 	// ADICIONAR UM ITEM EM UM ARRAY
// 	// PUSH - adicionar um novo item sempre ao final da lista
// 	// sempre será armazenado o novo item na posição lista.length - 1
// 	listaCompras.push(produto);

// 	// UNSHIFT - adicionar um novo item sempre ao inicio da lista
// 	// sempre será armazenado o novo item na posição 0
// 	// listaCompras.unshift(produto);

// 	continuar = confirm('Deseja continuar cadastrando produtos na sua lista?');
// } while (continuar);

// console.log(listaCompras); // ['arroz', 'feijão', 'carne', 'massa']

// COMO REMOVER DADOS DURANTE A EXECUÇÃO DO SCRIPT?

// =====================================================
// POP - remover um item sempre do final da lista
// sempre será removido o ultimo item da lista (lista.length - 1)
// let item1excluido = listaCompras.pop();
// console.log(item1excluido); //'massa'

// let item2excluido = listaCompras.pop();
// console.log(item2excluido); //'carne'

// console.log(listaCompras); // ['arroz', 'feijão']

// ['arroz', 'feijão', 'carne', 'massa']

// =====================================================
// SHIFT - remover um item sempre do inicio da lista
// sempre será removido o item da posição/indice 0 da lista
//let item1excluido = listaCompras.shift();
//console.log(item1excluido); // 'arroz'

//let item2excluido = listaCompras.shift();
//console.log(item2excluido); // 'feijão'

// console.log(listaCompras); // ['carne', 'massa']

// let listaCompras = [];
// let continuar = false;

// do {
// 	const produto = prompt(
// 		'Informe um produto a ser adicionado na sua lista de compras: '
// 	);

// 	// ADICIONAR UM ITEM EM UM ARRAY
// 	// PUSH - adicionar um novo item sempre ao final da lista
// 	// sempre será armazenado o novo item na posição lista.length - 1
// 	listaCompras.push(produto);

// 	// UNSHIFT - adicionar um novo item sempre ao inicio da lista
// 	// sempre será armazenado o novo item na posição 0
// 	// listaCompras.unshift(produto);

// 	continuar = confirm('Deseja continuar cadastrando produtos na sua lista?');
// } while (continuar);

// console.log(listaCompras); // ['arroz', 'feijão', 'carne', 'massa']

// UTILIZANDO LAÇOS DE REPETIÇÃO PARA PERCORRER OS DADOS DE UM ARRAY

// 1 - FOR
// [0] até [lista.length - 1]

// tamanho = 4
// for (let indice = 0; indice < listaCompras.length; indice++) {
// 	console.log(`Item => ${listaCompras[indice]}`);
// }

// 2 - FOR OF - sempre vai estar acessando o valor contido em cada posição do array
// for (let item of listaCompras) {
// 	console.log(`Item => ${item}`);
// }
