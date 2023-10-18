import { NextFunction, Request, Response } from 'express';
import { AlunoService } from '../services';

export class VerificarIdAluno {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;

		const service = new AlunoService();

		const response = await service.listarPorID(id);

		if (!response.ok) {
			return res.status(response.code).json(response);
		}

		return next();
	}
}
