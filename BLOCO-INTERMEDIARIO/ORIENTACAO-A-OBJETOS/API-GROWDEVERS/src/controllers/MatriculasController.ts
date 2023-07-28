import { Request, Response } from 'express';
import { alunos } from '../database/alunos';
import { turmas } from '../database/turmas';

class MatriculasController {
	public matricular(request: Request, response: Response) {
		const { idAluno, idTurma } = request.body;

		const indiceAluno = alunos.findIndex(
			(aluno) => aluno.detalheAluno().id === idAluno
		);

		if (indiceAluno === -1) {
			return response.status(404).json({
				ok: false,
				mensagem: 'Aluno não encontrado',
			});
		}

		const indiceTurma = turmas.findIndex(
			(turma) => turma.detalheTurma().id === idTurma
		);

		if (indiceTurma === -1) {
			return response.status(404).json({
				ok: false,
				mensagem: 'Turma não encontrada',
			});
		}

		turmas[indiceTurma].adicionaAluno(alunos[indiceAluno]);

		return response.status(200).json({
			ok: true,
			mensagem: 'Aluno matriculado com sucesso.',
			data: turmas[indiceTurma].detalheTurma().alunos,
		});
	}

	public cancelar(request: Request, response: Response) {
		// já temos uma lista de alunos cadastrados
		// já temos uma lista de turmas cadastradas
		// a gente precisa remover um aluno (especifico) de uma turma (especifica)
		// precisar saber qual é o aluno - qual o aluno que será matriculado
		// precisar saber qual é a turma - e em qual turma
		const { idAluno, idTurma } = request.body;

		const indiceTurma = turmas.findIndex(
			(turma) => turma.detalheTurma().id === idTurma
		);

		if (indiceTurma === -1) {
			return response.status(404).json({
				ok: false,
				mensagem: 'Turma não encontrada',
			});
		}

		const sucesso = turmas[indiceTurma].removeAluno(idAluno);

		if (!sucesso) {
			return response.status(400).json({
				ok: false,
				mensagem:
					'Aluno não encontrado na turma. Cancelamento não pode ser feito.',
			});
		}

		const turmaDetalhe = turmas[indiceTurma].detalheTurma();

		return response.status(200).json({
			ok: true,
			mensagem: `Aluno cancelado da turma ${turmaDetalhe.programa} - ${turmaDetalhe.edicao} com sucesso`,
			data: turmaDetalhe.alunos,
		});
	}

	public listar(request: Request, response: Response) {
		const { id } = request.params;

		const indiceTurma = turmas.findIndex(
			(turma) => turma.detalheTurma().id === id
		);

		if (indiceTurma === -1) {
			return response.status(404).json({
				ok: false,
				mensagem: 'Turma não encontrada',
			});
		}

		return response.status(200).json({
			ok: true,
			mensagem: 'Alunos matriculados listados com sucesso',
			data: turmas[indiceTurma].detalheTurma().alunos,
		});
	}
}

export default new MatriculasController();
