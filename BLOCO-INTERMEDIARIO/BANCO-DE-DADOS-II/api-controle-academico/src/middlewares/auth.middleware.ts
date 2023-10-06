import { NextFunction, Request, Response } from 'express';
import { AlunoService } from '../services';

export class Auth {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({
				ok: false,
				mensagem: 'Token é obrigatório',
			});
		}

		const service = new AlunoService();
		const tokenValido = await service.validarToken(token);

		if (!tokenValido) {
			return res.status(401).json({
				ok: false,
				mensagem: 'Token inválido',
			});
		}

		return next();
	}
}
