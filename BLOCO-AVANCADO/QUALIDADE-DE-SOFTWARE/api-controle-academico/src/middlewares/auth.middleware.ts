import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import { JWTAdapter } from '../adapters';
import { envs } from '../envs';

export class Auth {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({
				code: 401,
				ok: false,
				mensagem: 'Token é obrigatório',
			});
		}

		try {
			// CHAMAR O DECODIFICAR TOKEN
			const jwt = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
			const alunoAutorizado = jwt.decodificarToken(token);

			if (!alunoAutorizado) {
				return res.status(401).json({
					code: 401,
					ok: false,
					mensagem: 'Token inválido',
				});
			}

			req.usuario = alunoAutorizado;

			return next();
		
		} catch (erro: any) {

			if(erro instanceof JsonWebTokenError) {
				return res.status(401).json({
					code: 401,
					ok: false,
					mensagem: 'Token inválido ou expirado',
				});
			}

			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: 'Ops! Deu algo errado no servidor'
			});
		}
	}
}
