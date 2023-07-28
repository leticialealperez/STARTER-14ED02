import { randomUUID } from 'crypto';
import { DetalhesAluno, Growdever } from './Growdever';

export interface DetalhesTurma {
	id: string;
	edicao: string;
	programa: string;
	alunos: DetalhesAluno[];
}

export class Turma {
	private _id: string;
	private _edicao: string;
	private _programa: string;
	private _alunosMatriculados: Array<Growdever>;

	constructor(edicao: string, programa: string) {
		this._id = randomUUID();
		this._edicao = edicao;
		this._programa = programa;
		this._alunosMatriculados = [];
	}

	public listarAluno(): Array<Growdever> {
		return this._alunosMatriculados;
	}

	public removeAluno(idAluno: string): boolean {
		const indice = this._alunosMatriculados.findIndex(
			(aluno) => aluno.detalheAluno().id === idAluno
		);

		if (indice < 0) {
			console.log('Aluno não encontrado');
			return false;
		}

		this._alunosMatriculados.splice(indice, 1);
		return true;
	}

	public adicionaAluno(novoAluno: Growdever): void {
		this._alunosMatriculados.push(novoAluno);
	}

	public detalheTurma(): DetalhesTurma {
		const detalhes = {
			id: this._id,
			edicao: this._edicao,
			programa: this._programa,
			alunos: this._alunosMatriculados.map((aluno) =>
				aluno.detalheAluno()
			),
		};

		return detalhes;
	}
}
