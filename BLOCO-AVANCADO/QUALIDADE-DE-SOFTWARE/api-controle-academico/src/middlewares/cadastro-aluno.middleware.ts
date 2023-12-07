import { TipoAluno } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export class CadastroAluno {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { nome, email, senha, tipo } = req.body;

		if (!nome || !email || !senha || !tipo) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Faltam campos!',
			});
		}

		if (!email.includes('@') || !email.includes('.com')) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'E-mail inválido!',
			});
		}

		if (senha.length < 6) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Mínima 6 caracteres para senha',
			});
		}

		if(![TipoAluno.F, TipoAluno.M, TipoAluno.T].includes(tipo)) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Tipo inválido!',
			});
		}

		return next();
	}
}
