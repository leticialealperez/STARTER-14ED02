"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });


exports.calcMediaPeso = void 0;

function calcMediaPeso(listaNotas) {
    let TotalNotas = 0;
    listaNotas.forEach((nota) => {
        let auxiliar = nota.valor * nota.peso; //N[0]*P[0]
        TotalNotas += auxiliar;
    });
    return TotalNotas / listaNotas.length; // returna total / 20
}


exports.calcMediaPeso = calcMediaPeso;
