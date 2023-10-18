import { Request, Response } from 'express';
import { AlunoService } from '../services';

export class AlunoController {
	public async cadastrar(req: Request, res: Response) {
		try {
			const { nome, email, senha, idade } = req.body;
			const service = new AlunoService();

			const response = await service.cadastrar({ nome, email, senha, idade });

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async listar(_: Request, res: Response) {
		try {
			const service = new AlunoService();
			const response = await service.listar();

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async listPorID(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new AlunoService();

			const response = await service.listarPorID(id);

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async atualizar(req: Request, res: Response) {
		try {
			const { nome, idade, senha } = req.body;
			const { id } = req.params;

			const service = new AlunoService();
			const response = await service.atualizar({ idAluno: id, nome, idade, senha });

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async deletar(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new AlunoService();

			const response = await service.deletar(id);

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async login(req: Request, res: Response) {
		try {
			const { email, senha } = req.body;

			const service = new AlunoService();

			const response = await service.login({ email, senha });

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async logout(req: Request, res: Response) {
		try {
			const { idAluno } = req.body;

			const service = new AlunoService();
			const response = await service.logout(idAluno);

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
