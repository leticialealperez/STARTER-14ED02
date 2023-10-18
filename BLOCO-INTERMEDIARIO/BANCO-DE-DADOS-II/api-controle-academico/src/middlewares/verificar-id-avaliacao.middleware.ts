import { NextFunction, Request, Response } from 'express';
import { AvaliacaoService } from '../services/avaliacao.service';

export class VerificarIdAvaliacao {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const { idAluno } = req.body;
		const { idAvaliacao } = req.params;

		if (idAvaliacao.length !== 36) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'ID inválido',
			});
		}

		const service = new AvaliacaoService();

		const response = await service.listarPorID({ idAvaliacao, idAluno });

		if (!response.ok) {
			return res.status(response.code).json(response);
		}

		return next();
	}
}
