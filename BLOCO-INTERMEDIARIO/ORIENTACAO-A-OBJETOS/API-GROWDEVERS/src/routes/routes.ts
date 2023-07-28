import { Request, Response, Router } from 'express';

import GrowdeversController from '../controllers/GrowdeversController';
import HabilidadesControllers from '../controllers/HabilidadesControllers';
import MatriculasController from '../controllers/MatriculasController';
import TurmasController from '../controllers/TurmasController';

const app = Router();

app.get('/', (request: Request, response: Response) => {
	return response.status(200).json({ ok: true, mensagem: 'API Growdevers' });
});

// Growdevers
app.get('/growdevers', GrowdeversController.listar);
app.get('/growdevers/:id', GrowdeversController.listarPorID);
app.post('/growdevers', GrowdeversController.cadastrar);
app.put('/growdevers/:id', GrowdeversController.atualizar);
app.delete('/growdever/:id', GrowdeversController.deletar);

// Habilidades
app.put('/growdevers/:id/habilidades', HabilidadesControllers.adicionar);
app.get('/growdevers/:id/habilidades', HabilidadesControllers.listar);

// Turmas
app.post('/turmas', TurmasController.cadastrar);
app.get('/turmas', TurmasController.listar);

// Matriculas
app.put('/matriculas/add', MatriculasController.matricular);
app.put('/matriculas/remover', MatriculasController.cancelar);
app.get('/matriculas/:id', MatriculasController.listar);

export default app;
