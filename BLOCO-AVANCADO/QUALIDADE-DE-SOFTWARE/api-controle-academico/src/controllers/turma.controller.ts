import { Request, Response } from 'express';

export class TurmaController {
	public async cadastrar(req: Request, res: Response) {
		try {
			// TO - DO
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async listar(req: Request, res: Response) {
		try {
			// TO - DO
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

	public async listarPorID(req: Request, res: Response) {
		try {
			// TO - DO
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
			// TO - DO
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
			// TO - DO
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}
}