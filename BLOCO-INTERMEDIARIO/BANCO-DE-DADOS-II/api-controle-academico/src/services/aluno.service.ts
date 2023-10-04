import { Aluno as AlunoDB, Endereco as EnderecoDB } from '@prisma/client';
import repository from '../database/prisma.connection';
import { CadastrarAlunoDTO } from '../dtos';
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

	// TO-DO - pensar no que é necessario receber como parametro para atualização de um registro de aluno e criar o DTO
	// TO-DO - desenvolver a lógica de atualização do registro no banco de dados
	// TO-DO - deve retornar o aluno atualizado (trocar o tipo do retorno de any para o tipo correto)
	public async atualizar(): Promise<any> {}

	// TO-DO - pensar no que é necessario receber como parametro para exclusao de um registro de aluno (não precisa DTO)
	// TO-DO - desenvolver a lógica de exclusão do registro no banco de dados
	// TO-DO - deve retornar o aluno deletado (trocar o tipo do retorno de any para o tipo correto)
	public async deletar(): Promise<any> {}

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
