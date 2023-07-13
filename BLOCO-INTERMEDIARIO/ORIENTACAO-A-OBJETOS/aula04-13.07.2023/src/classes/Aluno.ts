// Aluno -> identificador da classe

/*

// ATRIBUTOS
nomeCompleto: string;
CPF: string ;
idade: number;
habilidades: string[];
notas: number[];
turma: string;


// MÉTODOS
    aprenderHabilidade() {
        // aqui é uma rotina que vai executar para modifcar uma propriedade
    }

    realizarAtividade() {
        // aqui é uma rotina que vai executar para modifcar uma propriedade
    }
*/

// export interface Aluno2 {
// }

export class Aluno {
	nomeCompleto: string;
	CPF: string;
	idade: number;
	habilidades: string[];
	notas: number[];
	turma: string;

	// construtor é a função padrão que sempre executa quando a gente instancia uma classe, serve para setarmos os valores para os atributos da classe
	constructor(nomeA: string, CpfAluno: string, idade: number) {
		// parametro
		this.nomeCompleto = nomeA;
		this.CPF = CpfAluno;
		this.idade = idade;

		// default
		this.habilidades = [];
		this.notas = [];
		this.turma = 'Programa Starter - 14ed - Turma 2';
	}

	aprenderHabilidade(novaHabilidade: string): void {
		// aqui é uma rotina que vai executar para modifcar uma propriedade
		this.habilidades.push(novaHabilidade);
	}

	realizarAtividade(notaAtividade: number): void {
		// aqui é uma rotina que vai executar para modifcar uma propriedade
		this.notas.push(notaAtividade);
	}

	mudarTurma(novoTurma: string): void {
		// aqui é uma rotina que vai executar para modifcar uma propriedade
		this.turma = novoTurma;
	}
}
