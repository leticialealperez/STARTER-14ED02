import { NextFunction, Request, Response } from 'express';
import { AlunoService } from '../services';

export class VerificarFormatoId {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		if (id.length !== 36) {
			return res.status(400).json({
				ok: false,
				mensagem: 'ID inválido',
			});
		}

		const service = new AlunoService();

		const alunoExiste = await service.listarPorID(id);

		if (!alunoExiste) {
			return res.status(400).json({
				ok: false,
				mensagem: 'Aluno não encontrado',
			});
		}

		return next();
	}
}
