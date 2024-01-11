import { Aluno as AlunoPrisma, Endereco as EnderecoPrisma } from '@prisma/client';
import { BcryptAdapter } from '../adapters';
import repository from '../database/prisma.connection';
import { AtualizarAlunoDTO, CadastrarAlunoDTO, ResponseDTO } from '../dtos';
import { envs } from '../envs';
import { Aluno, Endereco } from '../models';

export class AlunoService {
  /**
   * Método que cadastra o aluno na base de dados de acordo com os dados recebidos e retorna a resposta à ser devolvida na requisição de acordo com o resultado do processamento realizado.
   *
   * @param dados - Objeto com as propriedades necessárias para cadastrar um aluno
   * @returns Promise da resposta no padrão REST de acordo com a lógica executada.
   *
   * @author Leticia Leal <mentor13@growdev.academy>
   * 
   */
	public async cadastrar(dados: CadastrarAlunoDTO): Promise<ResponseDTO<Aluno | undefined>> {
		const alunoExiste = await repository.aluno.findUnique({
			where: { email: dados.email },
		});

		if (alunoExiste) {
			return {
				code: 400,
				ok: false,
				mensagem: 'E-mail já cadastrado',
				dados: undefined
			};
		}

		// encriptografar a senha
		const bcrypt = new BcryptAdapter(Number(envs.BCRYPT_SALT));
		const hash = await bcrypt.gerarHash(dados.senha);

		const alunoDB = await repository.aluno.create({
			data: {
				email: dados.email,
				nomeCompleto: dados.nome,
				password: hash,
				idade: dados.idade,
				tipo: dados.tipo
			},
		});

		return {
			code: 201,
			ok: true,
			mensagem: 'Aluno cadastrado!',
			dados: this.mapToModel({ ...alunoDB, endereco: null }),
		};
	}

	/**
	 * Método que busca os alunos cadastrados na base de dados e retorna resposta à ser devolvida na requisição de acordo com o resultado do processamento realizado.
	 *
	 * @returns Promise da resposta no padrão REST de acordo com a lógica executada.
	 *
	 * @author Leticia Leal <mentor13@growdev.academy>
	 * 
	 */
	public async listar(): Promise<ResponseDTO<Aluno[] | undefined>> {
		const alunosDB = await repository.aluno.findMany({
			orderBy: { nomeCompleto: 'desc' },
			include: { endereco: true },
		});

		if (!alunosDB.length) {
			return {
				code: 404,
				ok: false,
				mensagem: 'Não foram encontrados alunos cadastrados no sistema.',
				dados: undefined
			};
		}

		return {
			code: 200,
			ok: true,
			mensagem: 'Alunos listados com sucesso',
			dados: alunosDB.map((a) => this.mapToModel(a)),
		};
	}

	public async listarPorID(id: string): Promise<ResponseDTO<Aluno | undefined>> {
		const alunoDB = await repository.aluno.findUnique({
			where: {
				id: id,
			},
			include: { endereco: true },
		});

		if (!alunoDB) {
			return {
				code: 404,
				ok: false,
				mensagem: 'Aluno não encontrado',
				dados: undefined
			};
		}

		return {
			code: 200,
			ok: true,
			mensagem: 'Aluno encontrado',
			dados: this.mapToModel(alunoDB),
		};
	}

	public async atualizar(dados: AtualizarAlunoDTO): Promise<ResponseDTO<Aluno>> {
		const alunoAtualizado = await repository.aluno.update({
			where: { id: dados.idAluno },
			data: {
				nomeCompleto: dados.nome,
				idade: dados.idade,
				password: dados.senha,
			},
			include: { endereco: true },
		});

		return {
			code: 200,
			ok: true,
			mensagem: 'Aluno atualizado',
			dados: this.mapToModel(alunoAtualizado),
		};
	}

	public async deletar(id: string): Promise<ResponseDTO<Aluno>> {
		const alunoExcluido = await repository.aluno.delete({
			where: { id: id },
			include: { endereco: true },
		});

		return {
			code: 200,
			ok: true,
			mensagem: 'Aluno excluido',
			dados: this.mapToModel(alunoExcluido),
		};
	}

	private mapToModel(alunoDB: AlunoPrisma & { endereco: EnderecoPrisma | null }): Aluno {
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
