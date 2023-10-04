import { NextFunction, Request, Response } from 'express';

export class CadastroAluno {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { nome, email, senha } = req.body;

		if (!nome || !email || !senha) {
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

		if (senha.length < 6) {
			return res.status(400).json({
				ok: false,
				mensagem: 'Mínima 6 caracteres para senha',
			});
		}

		return next();
	}
}
