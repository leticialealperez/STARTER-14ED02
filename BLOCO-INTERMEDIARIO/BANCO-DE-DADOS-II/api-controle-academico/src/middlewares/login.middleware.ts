import { NextFunction, Request, Response } from 'express';

export class Login {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { email, senha } = req.body;

		if (!email || !senha) {
			return res.status(400).json({
				ok: false,
				mensagem: 'Faltam campos!',
			});
		}

		if (!email.includes('@') || !email.includes('.com')) {
			return res.status(400).json({
				ok: false,
				mensagem: 'E-mail inválido!',
			});
		}

		return next();
	}
}
