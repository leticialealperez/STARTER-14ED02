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

export abstract class Aluno {
	private _nomeCompleto: string;
	private _CPF: string;
	private _idade: number;
	private _habilidades: string[];
	private _notas: number[];
	private _turmaAtual: string;
	private _historicoModificacao: { responsavel: string; motivo: string }[];

	// construtor é a função padrão que sempre executa quando a gente instancia uma classe, serve para setarmos os valores para os atributos da classe
	constructor(nomeA: string, CpfAluno: string, idade: number) {
		// parametro
		this._nomeCompleto = nomeA;
		this._CPF = CpfAluno;
		this._idade = idade;

		// default
		this._habilidades = [];
		this._notas = [];
		this._turmaAtual = 'Programa Starter - 14ed - Turma 2';
		this._historicoModificacao = [];
	}

	public aprenderHabilidade(novaHabilidade: string): void {}

	public realizarAtividade(notaAtividade: number): void {}

	public mudarTurma(novoTurma: string): void {}

	public atualizarCPF(responsavel: string, motivo: string, novoCpf: string) {}

	// GETERS -> métodos acessores
	// deve retornar o tipo do dado do atributo que está tornando acessivel
	// todo getter não recebe parametro
	public get nomeCompleto(): string {
		return this._nomeCompleto;
	}

	public get CPF(): string {
		return this._CPF;
	}

	// SETTERS -> métodos modificadores
	// deve sempre receber um parametro que será o novo valor para o atributo que está setando/modificando
	// não deve retornar nada
	public set nomeCompleto(novoNome: string) {
		if (novoNome.length < 3) {
			console.log('Nome não pode conter menos que 3 caracters');
			return;
		}
		// registro dessa modificação
		const dataAtual = new Date();
		console.log(`Nome modificado em: ${dataAtual}`);

		this._nomeCompleto = novoNome;
	}
}
