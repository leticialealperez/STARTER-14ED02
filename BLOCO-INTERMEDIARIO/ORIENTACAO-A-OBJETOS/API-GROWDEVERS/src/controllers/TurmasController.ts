import { Request, Response } from 'express';
import { turmas } from '../database/turmas';
import { DetalhesTurma, Turma } from '../models/Turma';

// toda camada da aplicação vai ter apenas métodos
class TurmasController {
	public cadastrar(request: Request, response: Response) {
		const { edicao, programa } = request.body;

		if (!edicao || typeof edicao !== 'string') {
			return response.status(400).json({
				ok: false,
				mensagem: 'É necessario informar a edição do tipo String',
			});
		}

		if (!programa || typeof programa !== 'string') {
			return response.status(400).json({
				ok: false,
				mensagem: 'É necessario informar o programa do tipo String',
			});
		}

		const novaTurma = new Turma(edicao, programa);

		turmas.push(novaTurma);

		return response.status(201).json({
			ok: true,
			mensagem: 'Turma cadastrada com sucesso.',
			data: novaTurma.detalheTurma(),
		});
	}

	public listar(request: Request, response: Response) {
		let listarTurmas: DetalhesTurma[] = [];

		if (turmas.length > 0) {
			listarTurmas = turmas.map((turma) => turma.detalheTurma());
		}

		return response.status(200).json({
			ok: true,
			mensagem: 'Turmas listadas com sucesso.',
			data: listarTurmas,
		});
	}
}

export default new TurmasController();
