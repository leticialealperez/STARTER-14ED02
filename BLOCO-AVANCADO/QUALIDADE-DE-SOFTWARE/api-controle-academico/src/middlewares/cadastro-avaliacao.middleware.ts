import { NextFunction, Request, Response } from 'express';

export class CadastroAvaliacao {
	public validar(req: Request, res: Response, next: NextFunction) {
		const { modulo, nota, idAluno } = req.body;

		if (!modulo || !nota || !idAluno) {
			return res.status(400).json({
				code: 400,
				ok: false,
				mensagem: 'Faltam campos!',
			});
		}

		return next();
	}
}
