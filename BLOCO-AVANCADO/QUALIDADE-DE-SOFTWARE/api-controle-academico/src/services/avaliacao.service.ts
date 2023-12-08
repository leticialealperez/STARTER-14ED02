import { Avaliacao as AvaliacaoPrisma } from '@prisma/client';
import repository from '../database/prisma.connection';
import {
	AtualizarAvaliacaoDTO,
	CadastrarAvaliacaoDTO,
	DeletarAvaliacaoDTO,
	ListarAvaliacaoPorIdDTO,
	ResponseDTO,
} from '../dtos';
import { Avaliacao } from '../models';

export class AvaliacaoService {
	public async criar(dado: CadastrarAvaliacaoDTO): Promise<ResponseDTO> {
		const novaAvaliacao = await repository.avaliacao.create({
			data: {
				modulo: dado.modulo,
				nota: dado.nota,
				idAluno: dado.idAluno,
			},
		});

		return {
			code: 201,
			ok: true,
			mensagem: 'Avaliação cadastrada com sucesso!',
			dados: this.mapToModel(novaAvaliacao),
		};
	}

	public async listarTodos(aluno: string | undefined): Promise<ResponseDTO> {
		const avaliacoes = await repository.avaliacao.findMany({
			where: {
				idAluno: aluno,
			},
		});

		if (!avaliacoes.length) {
			return {
				code: 404,
				ok: false,
				mensagem: 'Não foram encontradas avaliações.',
			};
		}

		return {
			code: 200,
			ok: true,
			mensagem: 'Avaliações listadas com sucesso',
			dados: avaliacoes.map((a) => this.mapToModel(a)),
		};
	}

	public async listarPorID(dados: ListarAvaliacaoPorIdDTO): Promise<ResponseDTO> {
		const avaliacaoEncontrada = await repository.avaliacao.findUnique({
			where: {
				id: dados.idAvaliacao,
				idAluno: dados.idAluno,
			},
		});

		if (!avaliacaoEncontrada) {
			return {
				code: 404,
				ok: false,
				mensagem: 'Avaliação não encontrada',
			};
		}

		return {
			code: 200,
			ok: true,
			mensagem: 'Avaliação encontrada com sucesso',
			dados: this.mapToModel(avaliacaoEncontrada),
		};
	}

	public async atualizar(dados: AtualizarAvaliacaoDTO): Promise<ResponseDTO> {
		const avaliacaoAtualizada = await repository.avaliacao.update({
			where: {
				id: dados.idAvaliacao,
			},
			data: {
				modulo: dados.modulo,
				nota: dados.nota,
			},
		});

		return {
			code: 200,
			ok: true,
			mensagem: 'Avaliação atualizada com sucesso',
			dados: this.mapToModel(avaliacaoAtualizada),
		};
	}

	public async deletar(dados: DeletarAvaliacaoDTO): Promise<ResponseDTO> {
		const avaliacaoExcluida = await repository.avaliacao.delete({
			where: {
				id: dados.idAvaliacao
			},
		});

		return {
			code: 200,
			ok: true,
			mensagem: 'Avaliação excluida com sucesso',
			dados: this.mapToModel(avaliacaoExcluida),
		};
	}

	private mapToModel(avaliacao: AvaliacaoPrisma): Avaliacao {
		return new Avaliacao(avaliacao.id, avaliacao.idAluno, avaliacao.modulo, Number(avaliacao.nota));
	}
}
