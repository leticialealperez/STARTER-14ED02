import { Request, Response } from 'express';
import repository from '../database/prisma.connection';
import { Aluno } from '../models';
import { Endereco } from '../models/endereco.model';

export class AlunoController {
	// ✅
	public async create(req: Request, res: Response) {
		const { nome, email, senha, idade } = req.body;

		const alunoExiste = await repository.aluno.findUnique({
			where: { email: email },
			// include: { endereco: true },
		});

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

	// ✅
	public async listAll(req: Request, res: Response) {
		const alunosDB = await repository.aluno.findMany({
			orderBy: { nomeCompleto: 'desc' },
			include: { endereco: true },
		});

		const alunosModel = alunosDB.map((alunoDB) => {
			if (alunoDB.endereco) {
				const endereco = new Endereco(
					alunoDB.endereco.id,
					alunoDB.endereco.logradouro,
					alunoDB.endereco.cep,
					alunoDB.endereco.numero,
					alunoDB.endereco.cidade,
					alunoDB.endereco.uf,
					alunoDB.endereco.complemento ?? undefined
				);

				// ALUNO COM ENDEREÇO
				return new Aluno(
					alunoDB.id,
					alunoDB.nomeCompleto,
					alunoDB.email,
					alunoDB.password,
					alunoDB.idade ?? undefined,
					endereco
				);
			}

			// ALUNO SEM ENDEREÇO
			return new Aluno(
				alunoDB.id,
				alunoDB.nomeCompleto,
				alunoDB.email,
				alunoDB.password,
				alunoDB.idade ?? undefined
			);
		});

		return res.status(200).json({
			ok: true,
			mensagem: 'Alunos listados com sucesso',
			dados: alunosModel.map((a) => a.toJSON()),
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

		const alunoDB = await repository.aluno.findUnique({
			where: {
				id: id,
			},
		});

		if (!alunoDB) {
			return res.status(404).json({
				ok: false,
				mensagem: 'Aluno não encontrado',
			});
		}

		return res.status(200).json({
			ok: true,
			mensagem: 'Aluno encontrado',
			dados: new Aluno(
				alunoDB.id,
				alunoDB.nomeCompleto,
				alunoDB.email,
				alunoDB.password,
				alunoDB.idade ?? undefined
			).toJSON(),
		});
	}

	// TO-DO
	public async update(req: Request, res: Response) {}

	// TO-DO
	public async delete(req: Request, res: Response) {}
}
