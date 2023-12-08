import { NextFunction, Request, Response } from 'express';
import { AvaliacaoService } from '../services';

export class VerificarIdAvaliacao {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const idAluno = req.usuario.id;
		const { id } = req.params;

		const service = new AvaliacaoService();

		const response = await service.listarPorID({ idAvaliacao: id, idAluno });

		if (!response.ok) {
			return res.status(response.code).json(response);
		}

		return next();
	}
}
