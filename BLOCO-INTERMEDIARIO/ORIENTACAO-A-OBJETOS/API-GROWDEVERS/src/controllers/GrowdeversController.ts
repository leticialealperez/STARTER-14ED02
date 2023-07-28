import { Request, Response } from 'express';
import { alunos } from '../database/alunos';
import { DetalhesAluno, Growdever } from '../models/Growdever';
// CAMADAS GERALMENTE SÓ POSSUEM MÉTODOS

class GrowdeversController {
	// SE EU NÃO TENHO ATRIBUTOS PRECISO DE UM CONSTRUTOR?
	// Não precisa

	public listar(request: Request, response: Response) {
		let listaAlunos: DetalhesAluno[] = [];

		if (alunos.length > 0) {
			listaAlunos = alunos.map((aluno) => aluno.detalheAluno());
		}

		return response.status(200).json({
			ok: true,
			mensagem: 'Lista de Growdevers buscada.',
			data: listaAlunos,
		});
	}

	public listarPorID(request: Request, response: Response) {
		// const id = request.params.id -> mesma coisa que const { id } = request.params
		const { id } = request.params;

		const alunoEncontrado = alunos.find(
			(aluno) => aluno.detalheAluno().id === id
		);

		if (!alunoEncontrado) {
			return response.status(400).json({
				ok: false,
				mensagem: 'Growdever não encontrado.',
			});
		}

		return response.status(200).json({
			ok: true,
			mensagem: 'Growdever encontrado.',
			data: alunoEncontrado.detalheAluno(),
		});
	}

	public cadastrar(request: Request, response: Response) {
		const { nome, idade } = request.body;

		if (!nome || !idade) {
			return response.status(400).json({
				ok: false,
				mensagem: 'Nome e Idade são obrigatorios.',
			});
		}

		if (nome.length < 3 || typeof nome !== 'string') {
			return response.status(400).json({
				ok: false,
				mensagem:
					'Insira um nome do tipo string, com mais de 2 letras.',
			});
		}

		const idadeConvertido = Number(idade);

		if (idadeConvertido <= 16 || isNaN(idadeConvertido)) {
			return response.status(400).json({
				ok: false,
				mensagem: 'Idade deve ser um número e ser maior de 16 anos.',
			});
		}

		const novoAluno = new Growdever(nome, idadeConvertido);

		alunos.push(novoAluno);

		return response.status(200).json({
			ok: true,
			mensagem: 'Growdever cadastrado com sucesso!!!',
			data: novoAluno.detalheAluno(),
		});
	}

	public atualizar(request: Request, response: Response) {
		const { nome, idade } = request.body;
		const { id } = request.params;

		const indice = alunos.findIndex(
			(aluno) => aluno.detalheAluno().id === id
		);

		if (indice === -1) {
			return response
				.status(404)
				.json({ ok: false, mensagem: 'Growdever não encontrado' });
		}

		if ((nome && typeof nome !== 'string') || (nome && nome.length < 3)) {
			return response.status(400).json({
				ok: false,
				mensagem:
					'É necessário informar um nome do tipo string, com no mínimo 3 caracteres',
			});
		}

		let idadeConvertida = Number(idade);

		if (
			(idade && isNaN(idadeConvertida)) ||
			(idade && idadeConvertida <= 16)
		) {
			return response.status(400).json({
				ok: false,
				mensagem:
					'É necessário informar uma idade do tipo number, maior que 16 anos',
			});
		}

		const dadosAlunoAnterior = alunos[indice].detalheAluno();

		alunos[indice].nome = nome ?? dadosAlunoAnterior.nome;
		alunos[indice].idade = idade
			? idadeConvertida
			: dadosAlunoAnterior.idade;

		return response.status(200).json({
			ok: true,
			mensagem: 'Growdever atualizado com sucesso',
			data: alunos[indice].detalheAluno(),
		});
	}

	public deletar(request: Request, response: Response) {
		const { id } = request.params;
		const indice = alunos.findIndex(
			(aluno) => aluno.detalheAluno().id === id
		);
		if (indice === -1) {
			return response.status(400).json({
				ok: false,
				mensagem:
					'Growdever não encontrado, verifique e tente novamente.',
			});
		}

		const alunoDeletado = alunos.splice(indice, 1);

		return response.status(200).json({
			ok: true,
			mensagem: 'Aluno deletado com sucesso.',
			data: alunoDeletado[0].detalheAluno(),
		});
	}
}

export default new GrowdeversController();
