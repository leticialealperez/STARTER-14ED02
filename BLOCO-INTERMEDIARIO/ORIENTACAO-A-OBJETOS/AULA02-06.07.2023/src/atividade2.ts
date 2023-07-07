/*

[
    {
        nota: number,
        peso: number
    },
    {
        nota: number,
        peso: number
    },
    {
        nota: number,
        peso: number
    },
    {
        nota: number,
        peso: number
    }
]

2. Crie uma função que receba uma LISTA de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
*/

// PARAMETRO => INPUT DA FUNÇÃO
// RETORNO => OUTPUT DA FUNÇÃO
import { Nota } from './types';

export function calcMediaPeso(listaNotas: Nota[]): number {
	let TotalNotas: number = 0;
	let TotalPesos: number = 0;

	listaNotas.forEach((nota) => {
		let auxiliar: number = nota.valor * nota.peso; // N[0] * P[0]
		TotalNotas += auxiliar;
		TotalPesos += nota.peso;
	});

	return TotalNotas / TotalPesos; // retorna um valor numerico resultante da divisão
}
