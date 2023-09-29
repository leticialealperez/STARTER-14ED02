import { Request, Response } from 'express';
import repository from '../database/prisma.connection';
import { Aluno } from '../models';

export class AlunoController {
	// ✅
	public async create(req: Request, res: Response) {
		const { nome, email, senha, idade } = req.body;

		const alunoExiste = await repository.aluno.findUnique({ where: { email: email } });

		if (alunoExiste) {
			return res.status(400).json({
				ok: false,
				mensagem: 'E-mail já cadastrado',
			});
		}

		const alunoDB = await repository.aluno.create({
			data: {
				email: email,
				nomeCompleto: nome,
				password: senha,
				idade: idade,
			},
		});

		const novoUsuario = new Aluno(
			alunoDB.id,
			alunoDB.nomeCompleto,
			alunoDB.email,
			alunoDB.password,
			alunoDB.idade ?? undefined
		);

		return res.status(201).json({
			ok: true,
			mensagem: 'Aluno cadastrado!',
			dados: novoUsuario.toJSON(),
		});
	}

	// TO-DO
	public async listAll(req: Request, res: Response) {}

	// TO-DO
	public async listByID(req: Request, res: Response) {}

	// TO-DO
	public async update(req: Request, res: Response) {}

	// TO-DO
	public async delete(req: Request, res: Response) {}
}
