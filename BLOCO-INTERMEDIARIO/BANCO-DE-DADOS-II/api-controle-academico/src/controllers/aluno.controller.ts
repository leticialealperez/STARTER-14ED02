import { Request, Response } from 'express';
import { AlunoService } from '../services';

export class AlunoController {
	private service = new AlunoService();
	// ✅
	public async create(req: Request, res: Response) {
		const { nome, email, senha, idade } = req.body;

		const alunoExiste = await this.service.verificarEmailExistente(email);

		if (alunoExiste) {
			return res.status(400).json({
				ok: false,
				mensagem: 'E-mail já cadastrado',
			});
		}

		const novoAluno = await this.service.cadastrar({
			email,
			nome,
			senha,
			idade,
		});

		return res.status(201).json({
			ok: true,
			mensagem: 'Aluno cadastrado!',
			dados: novoAluno.toJSON(),
		});
	}

	// ✅
	public async listAll(req: Request, res: Response) {
		const alunosDB = await this.service.listarTodos();

		return res.status(200).json({
			ok: true,
			mensagem: 'Alunos listados com sucesso',
			dados: alunosDB.map((a) => a.toJSON()),
		});
	}

	// ✅
	public async listByID(req: Request, res: Response) {
		const { id } = req.params;

		if (id.length !== 36) {
			return res.status(400).json({
				ok: false,
				mensagem: 'ID inválido',
			});
		}

		const alunoDB = await this.service.listarPorID(id);

		if (!alunoDB) {
			return res.status(404).json({
				ok: false,
				mensagem: 'Aluno não encontrado',
			});
		}

		return res.status(200).json({
			ok: true,
			mensagem: 'Aluno encontrado',
			dados: alunoDB.toJSON(),
		});
	}

	// TO-DO
	public async update(req: Request, res: Response) {}

	// TO-DO
	public async delete(req: Request, res: Response) {}
}
