import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';

// CRIAR O SERVIDOR/APP COM EXPRESS
const app = express();

// CONFIGURAÇÕES DO SERVIDOR - middlewares
app.use(express.json()); // converte o JSON em um objeto JS
app.use(express.urlencoded({ extended: false })); // converte os query params unicode
app.use(cors()); // configuração da politica de CORS

// DAR O START NO SERVIDOR
app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ message: 'API 14ED T02' }));

const prisma = new PrismaClient();

// CADASTRAR USUARIO
app.post('/usuarios', async (req, res) => {
	const { nomeCompleto, email, senha, dataNascimento } = req.body;

	// NÃO DEVE SER POSSIVEL CADASTRAR UM USUARIO COM O MESMO EMAIL EXISTENTE
	// findUnique - busca um único registro, geralmente utilizado para buscar por ID ou por aquela coluna/propriedade que será única (ex: email). Neste exemplo retorna um Usuario (quando encontrar) ou null (quando não encontrar)
	const usuarioExistente = await prisma.usuario.findUnique({
		where: {
			email: email,
		},
	});

	if (usuarioExistente) {
		return res.status(400).json({ ok: false, mensagem: 'E-mail já cadastrado' });
	}

	// create - método utilizado para criar um novo registro na base de dados. Deve ser informado todos os campos que não aceitam valores null com excessão daqueles que são gerados automaticamente pelo banco de dados, cujo @default foi definido (ex: id, criadoEm, atualizadoEm, etc...)
	const novoUsuario = await prisma.usuario.create({
		data: {
			nomeCompleto: nomeCompleto,
			dataNascimento: new Date(dataNascimento),
			email: email,
			senha: senha,
			idade: new Date().getFullYear() - new Date(dataNascimento).getFullYear(),
		},
	});

	return res.status(201).json({
		ok: true,
		mensagem: 'Usuario criado!',
		dados: novoUsuario,
	});
});
