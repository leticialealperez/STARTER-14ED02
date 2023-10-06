import { Request, Response } from 'express';
import { AlunoService } from '../services';

export class AlunoController {
	// ✅
	public async create(req: Request, res: Response) {
		const { nome, email, senha, idade } = req.body;
		const service = new AlunoService();

		const alunoExiste = await service.verificarEmailExistente(email);

		if (alunoExiste) {
			return res.status(400).json({
				ok: false,
				mensagem: 'E-mail já cadastrado',
			});
		}

		const novoAluno = await service.cadastrar({ email, nome, senha, idade });

		return res.status(201).json({
			ok: true,
			mensagem: 'Aluno cadastrado!',
			dados: novoAluno.toJSON(),
		});
	}

	// ✅
	public async listAll(req: Request, res: Response) {
		const service = new AlunoService();
		const alunosDB = await service.listarTodos();

		return res.status(200).json({
			ok: true,
			mensagem: 'Alunos listados com sucesso',
			dados: alunosDB.map((a) => a.toJSON()),
		});
	}

	// ✅
	public async listByID(req: Request, res: Response) {
		const { id } = req.params;
		const service = new AlunoService();

		const alunoDB = await service.listarPorID(id);

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

	// ✅
	public async update(req: Request, res: Response) {
		const { nome, idade, senha } = req.body;
		const { id } = req.params;

		const service = new AlunoService();
		const alunoAtualizado = await service.atualizar({ id, nome, idade, senha });

		return res.status(200).json({
			ok: true,
			mensagem: 'Aluno atualizado',
			dados: alunoAtualizado.toJSON(),
		});
	}

	// ✅
	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		const service = new AlunoService();

		const alunoExcluido = await service.deletar(id);

		return res.status(200).json({
			ok: true,
			mensagem: 'Aluno excluido',
			dados: alunoExcluido.toJSON(),
		});
	}

	// ✅
	public async login(req: Request, res: Response) {
		const { email, senha } = req.body;

		const service = new AlunoService();

		const token = await service.login({ email, senha });

		if (!token) {
			return res.status(401).json({
				ok: false,
				mensagem: 'Credenciais inválidas',
			});
		}

		return res.status(200).json({
			ok: true,
			mensagem: 'Login efetuado',
			dados: { token },
		});
	}
}
