import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import controllerGrowdever from './controllers/GrowdeversController';
import controllerHabilidades from './controllers/HabilidadesControllers';
import MatriculasController from './controllers/MatriculasController';
import TurmasController from './controllers/TurmasController';

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
app.post('/turmas', TurmasController.cadastrar);
app.get('/turmas', TurmasController.listar);

// Matriculas
app.put('/matriculas/add', MatriculasController.matricular);
app.put('/matriculas/remover', MatriculasController.cancelar);
app.get('/matriculas/:id', MatriculasController.listar);
