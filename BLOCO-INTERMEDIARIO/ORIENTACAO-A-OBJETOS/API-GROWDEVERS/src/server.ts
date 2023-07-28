import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import controllerGrowdever from './controllers/GrowdeversController';
import controllerHabilidades from './controllers/HabilidadesControllers';

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
app.get('/growdevers', controllerGrowdever.listar);
app.get('/growdevers/:id', controllerGrowdever.listarPorID);
app.post('/growdevers', controllerGrowdever.cadastrar);
app.put('/growdevers/:id', controllerGrowdever.atualizar);
app.delete('/growdever/:id', controllerGrowdever.deletar);

// Habilidades

app.put('/growdevers/:id/habilidades', controllerHabilidades.adicionar);
app.get('/growdevers/:id/habilidades', controllerHabilidades.listar);

// Turmas
// LISTAR TURMAS
// CADASTRAR

// Matriculas
// ADD ALUNO EM UMA TURMA - matricular
// REMOVER ALUNO DE UMA TURMA - cancelar
// LISTAR ALUNOS MATRICULADOS EM TURMA - listar
