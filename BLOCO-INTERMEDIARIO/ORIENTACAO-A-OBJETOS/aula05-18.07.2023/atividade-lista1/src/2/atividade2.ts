/*

    Crie uma função que receba uma "lista" de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos:
    Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
    Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

*/

// [ { nota: number, peso: number }, { nota: number, peso: number } ]
type Nota = {
	nota: number;
	peso: number;
};

export function atividade2(listaNotas: Array<Nota>): void {
	//[0].nota e [0].peso
	let soma = 0;

	listaNotas.forEach((nota) => {
		soma += nota.nota * nota.peso;
	});

	const resultado = soma / listaNotas.length;

	console.log(resultado.toFixed(2));
}
