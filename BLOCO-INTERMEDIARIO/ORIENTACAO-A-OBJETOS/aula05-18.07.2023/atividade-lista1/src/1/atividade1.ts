/*
    Crie uma função que receba 2 números e retorne um "objeto"
    contendo a média e também um indicador booleano de
    aprovado/reprovado. Considere aprovado com média >= 6.
*/

// string, number, boolean - PRIMITIVOS
// objetos e arrays - ESTRUTURAS

/* { propriedade: number, propriedade2: boolean } */

type RetornoAtividade1 = {
	media: number; // 8.3
	aprovado: boolean; // false ou true
};

// SÓ MODELA OBJETOS
// interface RetornoAtividade {
// 	media: number;
// 	aprovado: boolean;
// }

export function atividade1(num1: number, num2: number): RetornoAtividade1 {
	const resposta: RetornoAtividade1 = {
		media: (num1 + num2) / 2,
		aprovado: (num1 + num2) / 2 >= 6, // true ou false (comparação >= <= === !==  > < )
	};

	return resposta;
}
