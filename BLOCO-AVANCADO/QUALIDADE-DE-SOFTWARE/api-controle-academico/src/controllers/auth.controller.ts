import { Request, Response } from 'express';
import { AuthService } from '../services';

export class AuthController {
	public async login(req: Request, res: Response) {
		try {
			const { email, senha } = req.body;
			const service = new AuthService();

			const response = await service.login({  email, senha });

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}
}
