import { Aluno as AlunoDB, Endereco as EnderecoDB } from '@prisma/client';
import { randomUUID } from 'crypto';
import repository from '../database/prisma.connection';
import { AtualizarAlunoDTO, CadastrarAlunoDTO, LoginDTO } from '../dtos';
import { Aluno, Endereco } from '../models';

export class AlunoService {
	public async verificarEmailExistente(email: string): Promise<boolean> {
		const alunoExiste = await repository.aluno.findUnique({
			where: { email: email },
		});

		return !!alunoExiste; // falsy (undefined, null, 0, "") => false
	}

	public async cadastrar(dados: CadastrarAlunoDTO): Promise<Aluno> {
		const alunoDB = await repository.aluno.create({
			data: {
				email: dados.email,
				nomeCompleto: dados.nome,
				password: dados.senha,
				idade: dados.idade,
			},
		});

		return this.mapToModel({ ...alunoDB, endereco: null });
	}

	public async listarTodos(): Promise<Aluno[]> {
		const alunosDB = await repository.aluno.findMany({
			orderBy: { nomeCompleto: 'desc' },
			include: { endereco: true },
		});

		return alunosDB.map((a) => this.mapToModel(a));
	}

	public async listarPorID(id: string): Promise<Aluno | undefined> {
		const alunoDB = await repository.aluno.findUnique({
			where: {
				id: id,
			},
			include: { endereco: true },
		});

		if (!alunoDB) return undefined;

		return this.mapToModel(alunoDB);
	}

	public async atualizar(dados: AtualizarAlunoDTO): Promise<Aluno> {
		const alunoAtualizado = await repository.aluno.update({
			where: { id: dados.id },
			data: {
				nomeCompleto: dados.nome,
				idade: dados.idade,
				password: dados.senha,
			},
			include: { endereco: true },
		});

		return this.mapToModel(alunoAtualizado);
	}

	public async deletar(id: string): Promise<Aluno> {
		const alunoExcluido = await repository.aluno.delete({
			where: { id: id },
			include: { endereco: true },
		});

		return this.mapToModel(alunoExcluido);
	}

	public async login(dados: LoginDTO): Promise<string | null> {
		const alunoEncontrado = await repository.aluno.findUnique({
			where: {
				email: dados.email,
				password: dados.senha,
			},
		});

		if (!alunoEncontrado) {
			return null;
		}

		const token = randomUUID();

		await repository.aluno.update({
			where: { id: alunoEncontrado.id },
			data: { authToken: token },
		});

		return token;
	}

	public async validarToken(token: string): Promise<string | null> {
		const alunoEncontrado = await repository.aluno.findFirst({
			where: { authToken: token },
		});

		if (!alunoEncontrado) return null;

		return alunoEncontrado.id;
	}

	private mapToModel(alunoDB: AlunoDB & { endereco: EnderecoDB | null }): Aluno {
		const endereco = alunoDB?.endereco
			? new Endereco(
					alunoDB.endereco.id,
					alunoDB.endereco.logradouro,
					alunoDB.endereco.cep,
					alunoDB.endereco.numero,
					alunoDB.endereco.cidade,
					alunoDB.endereco.uf,
					alunoDB.endereco.complemento ?? undefined
			  )
			: undefined;

		return new Aluno(
			alunoDB.id,
			alunoDB.nomeCompleto,
			alunoDB.email,
			alunoDB.password,
			alunoDB.idade ?? undefined,
			endereco
		);
	}
}
