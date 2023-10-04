import { Router } from 'express';
import { AlunoController } from '../controllers';
import { CadastroAluno } from '../middlewares';

export function alunoRoutes() {
	const router = Router();
	const controller = new AlunoController();
	const cadastrarAluno = new CadastroAluno();

	router.post('/', [cadastrarAluno.validar], controller.create);
	router.get('/', controller.listAll);
	router.get('/:id', controller.listByID);
	router.put('/:id', controller.update);
	router.delete('/:id', controller.delete);

	return router;
}
