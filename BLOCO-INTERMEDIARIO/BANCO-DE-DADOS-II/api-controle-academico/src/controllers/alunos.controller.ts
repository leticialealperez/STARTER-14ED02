import { Request, Response } from 'express';
import repository from '../database/prisma.connection';
import { Aluno } from '../models';

export class AlunosController {
	public async cadastrar(req: Request, res: Response) {
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

	public async listarTodos(req: Request, res: Response) {}
}
