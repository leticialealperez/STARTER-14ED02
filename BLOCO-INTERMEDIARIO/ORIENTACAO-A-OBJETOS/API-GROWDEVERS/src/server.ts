import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import { alunos } from './database/alunos';
import { DetalhesAluno, Growdever } from './models/Growdever';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORTA, () =>
	console.log(`API Growdever rodando na porta ${process.env.PORTA}`)
);

app.get('/', (request: Request, response: Response) => {
	return response.status(200).json({ ok: true, mensagem: 'API Growdevers' });
});

// Growdevers
// LISTAR TODOS GROWDEVERS
app.get('/growdevers', (request: Request, response: Response) => {
	let listaAlunos: DetalhesAluno[] = [];

	if (alunos.length > 0) {
		listaAlunos = alunos.map((aluno) => aluno.detalheAluno());
	}

	return response.status(200).json({
		ok: true,
		mensagem: 'Lista de Growdevers buscada.',
		data: listaAlunos,
	});
});

// BUSCAR GROWDEVER POR ID
app.get('/growdevers/:id', (request: Request, response: Response) => {
	// const id = request.params.id -> mesma coisa que const { id } = request.params
	const { id } = request.params;

	const alunoEncontrado = alunos.find((aluno) => aluno.id === id);

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
});

// CADASTRAR GROWDEVER
// new Growdever("Ana", 18), nome, idade
app.post('/growdevers', (request: Request, response: Response) => {
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
			mensagem: 'Insira um nome do tipo string, com mais de 2 letras.',
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
});

// ATUALIZAR GROWDEVER
app.put('/growdevers/:id', (request: Request, response: Response) => {
	const { nome, idade } = request.body;
	const { id } = request.params;

	const indice = alunos.findIndex((aluno) => aluno.id === id);

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

	if ((idade && isNaN(idadeConvertida)) || (idade && idadeConvertida <= 16)) {
		return response.status(400).json({
			ok: false,
			mensagem:
				'É necessário informar uma idade do tipo number, maior que 16 anos',
		});
	}

	alunos[indice].nome = nome ?? alunos[indice].nome;
	alunos[indice].idade = idade ? idadeConvertida : alunos[indice].idade;

	return response.status(200).json({
		ok: true,
		mensagem: 'Growdever atualizado com sucesso',
		data: alunos[indice].detalheAluno(),
	});
});

// DELETAR GROWDEVER

// Habilidades
// ADICIONAR HABILIDADE À UM ALUNO
// LISTAR HABILIDADES DE UM ALUNO

// Turmas
// LISTAR TURMAS

// Matriculas
// ADD ALUNO EM UMA TURMA
// REMOVER ALUNO DE UMA TURMA
// LISTAR ALUNOS MATRICULADOS EM TURMA
